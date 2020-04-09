import React, { Component } from "react"
import Interval from "react-interval"
import Sketch from "react-p5"
import "./play.css"

import ObjectManager from "./p5_objects/ObjectManager"
import Sprite from "./p5_objects/Sprite"
import Clickable from "./p5_objects/Clickable"
import Button from "./p5_objects/custom/Button"

const numeral = require("numeral")

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      clickRate: 1,
      autoRate: 0,
      processing: false,
    }

    this.score = 0
    this.clickRate = 1
    this.autoRate = 0

    this.obj = new ObjectManager()

    this.heart = new Button("/game/img/heart/0.png")
    this.btnL = new Button("/game/img/btn/left.png")
    this.btnR = new Button("/game/img/btn/right.png")

    this.obj.addObj(this.heart)
    this.obj.addObj(this.btnL)
    this.obj.addObj(this.btnR)
  }

  finalReport = (resp) => {
    if (resp.data) {
      if (resp.data.error) this.props.alert("danger", "Error!", resp.data.error)
      if (resp.data.msg) this.props.alert("info", "Message", resp.data.msg)
    } else {
      //Failed to connect
      this.props.alert("danger", "Error!", "Failed to connect to the API")
    }
  }
  loadStats = async () => {
    const axios = this.props.session.axios
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.get("/stats")
      if (resp.data) {
        if (resp.data.data) {
          this.setState({
            score: resp.data.data.currentScore,
            clickRate: resp.data.data.clickRate,
            autoRate: resp.data.data.autoRate,
          })
          this.score = resp.data.data.currentScore
          this.clickRate = resp.data.data.clickRate
          this.autoRate = resp.data.data.autoRate
        }
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      this.finalReport(resp)
      this.setState({ processing: false })
    }
  }

  updateStats = async () => {
    this.setState({
      score: this.score,
      clickRate: this.clickRate,
      autoRate: this.autoRate,
    })
    const axios = this.props.session.axios
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.put("/stats", {
        data: {
          currentScore: this.score,
          clickRate: this.clickRate,
          autoRate: this.autoRate,
        },
      })
      if (resp.data) {
        if (resp.data.data) {
          this.setState({
            score: resp.data.data.currentScore,
            clickRate: resp.data.data.clickRate,
            autoRate: resp.data.data.autoRate,
          })
          this.score = resp.data.data.currentScore
          this.clickRate = resp.data.data.clickRate
          this.autoRate = resp.data.data.autoRate
        }
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      this.finalReport(resp)
      this.setState({ processing: false })
    }
  }

  componentDidMount() {
    this.loadStats()
  }

  gameWidth = 1000
  gameHeight = 550

  preload = (p5) => {
    this.obj.preload(p5)
    this.gameFont = p5.loadFont("/game/font/Mario-Kart-DS.ttf")
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.gameWidth, this.gameHeight).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

    const { btnL, btnR, heart } = this

    heart.setPos(this.gameWidth / 2, this.gameHeight / 2, true)
    heart.onClick = () => {
      this.score += this.clickRate
      this.props.alert(
        "info",
        "Clicked",
        `score:${this.score}\nclickRate:${this.clickRate}\nautoRate:${this.autoRate}`
      )
    }

    btnL.x = 20
    btnL.y = this.gameHeight - 120
    btnL.textSize = 32
    btnL.font_y = 24
    btnL.font = this.gameFont
    btnL.setScale(0.5, 0.5)
    btnL.onClick = () => {
      this.clickRate += 1
    }

    btnR.x = this.gameWidth - 380
    btnR.y = this.gameHeight - 120
    btnR.textSize = 32
    btnR.font_y = 24
    btnR.font = this.gameFont
    btnR.setScale(0.5, 0.5)
    btnR.onClick = () => {
      this.autoRate += 1
    }

    this.obj.setup(p5)
  }
  draw = (p5) => {
    p5.clear()
    // p5.background(0)
    p5.textSize(16)
    p5.textFont()
    p5.text(numeral(this.score).format("0"), 70, 70)
    this.obj.draw(p5)
  }
  mousePressed = (p5) => {
    this.obj.mousePressed(p5)
  }

  render() {
    return (
      <div className="container">
        {this.state.processing ? (
          <div>Saving</div>
        ) : (
          <div onClick={this.updateStats}>
            <span>
              <img
                className="img-fluid"
                style={{ width: "1%", height: "auto" }}
                src="/img/refresh-icon.png"
              ></img>
            </span>
            Save
          </div>
        )}
        <div className="row">
          <div id="canvas-container" className="d-flex justify-content-center">
            <Sketch
              preload={this.preload}
              setup={this.setup}
              draw={this.draw}
              mousePressed={this.mousePressed}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Play
