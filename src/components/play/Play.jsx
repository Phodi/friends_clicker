import React, { Component } from "react"
import Interval from "react-interval"
import Sketch from "react-p5"
import "./play.css"

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      clickRate: 1,
      autoRate: 0,
    }

    this.score = 0
    this.clickRate = 1
    this.autoRate = 0
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
    }
  }

  componentDidMount() {
    this.loadStats()
  }

  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)

  gameWidth = 1000
  gameHeight = 550

  heart_img = []
  heart_frame = 0
  bg_img = []
  btnl_img = null
  btnr_img = null
  lb_01 = null
  lb_02 = null
  lb_03 = null
  spriteL_00 = []
  spriteL_01 = []
  spriteL_02 = []
  spriteL_03 = []
  spriteL_04 = []
  spriteL_05 = []
  spriteR_00 = []
  spriteR_01 = []
  spriteR_02 = []
  spriteR_03 = []
  spriteR_04 = []
  spriteR_05 = []
  max_sprite_frame = [2, 2, 2, 2, 6, 8]
  spriteL = [
    this.spriteL_00,
    this.spriteL_01,
    this.spriteL_02,
    this.spriteL_03,
    this.spriteL_04,
    this.spriteL_05,
  ]
  spriteR = [
    this.spriteR_00,
    this.spriteR_01,
    this.spriteR_02,
    this.spriteR_03,
    this.spriteR_04,
    this.spriteR_05,
  ]
  sprite_index_set = 0
  sprite_index = 0
  vfx = []
  vfx_index = 0
  heart_frame = 0

  heart_x = 100
  heart_y = 90
  heart_scale = 1
  heartX = 500
  heartY = 275

  btnl_x = this.gameWidth / 2 - 50
  btnl_y = 100
  btnl_scale = 1
  btnlX = this.gameWidth / 4
  btnlY = this.gameHeight - this.btnl_y / 2 - 25

  btnr_x = this.gameWidth / 2 - 50
  btnr_y = 100
  btnr_scale = 1
  btnrX = (this.gameWidth * 3) / 4
  btnrY = this.btnlY

  spriteL_posX = this.gameWidth / 10
  spriteL_posY = 275
  sprite_x = 100
  sprite_y = 105

  spriteR_posX = (this.gameWidth * 9) / 10
  spriteR_posY = 275

  gameFont

  clickRateUpgrade = [1, 2, 4, 10, 20, 50, 150, 350, 500, 2500]
  costClickRateUpgrade = [
    100,
    1000,
    4000,
    16000,
    48000,
    200000,
    800000,
    3000000,
    10000000,
    100000000,
  ]

  autoRateUpgrade = [0, 1, 2, 4, 15, 50, 150]
  costAutoRateUpgrade = [1000, 5000, 34000, 200000, 750000, 3875000, 25000000]

  currentClickRateIndex = 0
  currentAutoRateIndex = 0

  everySecond = () => {
    // this.score += this.autoRate
  }

  changeFrame = () => {
    //vfx
    if (this.vfx_index < 90) this.vfx_index += 1
    else this.vfx_index = 0
    //sprite
    if (this.sprite_index < this.max_sprite_frame[this.sprite_index_set] - 1)
      this.sprite_index += 1
    else this.sprite_index = 0
  }

  preload = (p5) => {
    //Load font
    this.gameFont = p5.loadFont("/game/font/Mario-Kart-DS.ttf")

    //Load Heart animation frame
    this.heart_img.push(p5.loadImage("/game/img/heart/0.png"))
    this.heart_img.push(p5.loadImage("/game/img/heart/1.png"))
    this.heart_img.push(p5.loadImage("/game/img/heart/2.png"))
    this.heart_img.push(p5.loadImage("/game/img/heart/3.png"))
    this.heart_img.push(p5.loadImage("/game/img/heart/4.png"))
    this.heart_img.push(p5.loadImage("/game/img/heart/5.png"))

    //Load BG Level
    this.bg_img.push(p5.loadImage("/game/img/bg/0.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/1.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/2.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/3.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/4.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/5.png"))
    this.bg_img.push(p5.loadImage("/game/img/bg/6.png"))

    //Load button
    this.btnl_img = p5.loadImage("/game/img/btn/left.png")
    this.btnr_img = p5.loadImage("/game/img/btn/right.png")
    this.lb_01 = p5.loadImage("/game/img/btn/lb01.png")
    this.lb_02 = p5.loadImage("/game/img/btn/lb02.png")
    this.lb_03 = p5.loadImage("/game/img/btn/lb03.png")

    //Load sprite
    for (let index = 0; index < 2; index++) {
      this.spriteL_00.push(
        p5.loadImage("/game/img/sprites/fly_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteR_00.push(
        p5.loadImage("/game/img/sprites/fly_r/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteL_01.push(
        p5.loadImage("/game/img/sprites/fly2_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteR_01.push(
        p5.loadImage("/game/img/sprites/fly2_r/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteL_02.push(
        p5.loadImage("/game/img/sprites/gg_bee_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteR_02.push(
        p5.loadImage("/game/img/sprites/gg_bee_r/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteL_03.push(
        p5.loadImage("/game/img/sprites/bat_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 2; index++) {
      this.spriteR_03.push(
        p5.loadImage("/game/img/sprites/bat_r/" + index + ".png")
      )
    }
    for (let index = 0; index < 6; index++) {
      this.spriteL_04.push(
        p5.loadImage("/game/img/sprites/gp_bee_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 6; index++) {
      this.spriteR_04.push(
        p5.loadImage("/game/img/sprites/gp_bee_r/" + index + ".png")
      )
    }
    for (let index = 0; index < 8; index++) {
      this.spriteL_05.push(
        p5.loadImage("/game/img/sprites/wolf_l/" + index + ".png")
      )
    }
    for (let index = 0; index < 8; index++) {
      this.spriteR_05.push(
        p5.loadImage("/game/img/sprites/wolf_r/" + index + ".png")
      )
    }

    //load VFX
    for (let index = 0; index < 91; index++) {
      this.vfx.push(p5.loadImage("/game/img/vfx/" + index + ".png"))
    }
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.gameWidth, this.gameHeight).parent(canvasParentRef)
  }
  draw = (p5) => {
    console.log(typeof this.spriteL[0][0])
    p5.textSize(20)
    p5.textFont(this.gameFont)
    p5.image(
      this.bg_img[this.autoRateUpgrade.indexOf(this.autoRate)],
      0,
      0,
      1000,
      550
    )
    p5.image(
      this.vfx[this.vfx_index],
      this.heartX - 150,
      this.heartY - 150,
      300,
      300
    )
    p5.image(this.lb_01, 10, 10, 200, 67)
    p5.image(this.lb_02, 10 + 200 + 10, 10, 200, 67)
    p5.image(this.lb_03, 10 + 200 + 10 + 200 + 10, 10, 200, 67)
    p5.text("Score .", 35, 50)
    p5.text(this.score, 105, 50)
    p5.text("C. Rate .", 250, 50)
    p5.text(this.clickRate, 330, 50)
    p5.text("A. Rate .", 460, 50)
    p5.text(this.autoRate, 540, 50)

    p5.image(
      this.heart_img[this.heart_frame],
      this.heartX - (this.heart_x * this.heart_scale) / 2,
      this.heartY - (this.heart_y * this.heart_scale) / 2,
      this.heart_x * this.heart_scale,
      this.heart_y * this.heart_scale
    )
    p5.image(
      this.btnl_img,
      this.btnlX - (this.btnl_x * this.btnl_scale) / 2,
      this.btnlY - (this.btnl_y * this.btnl_scale) / 2,
      this.btnl_x * this.btnl_scale,
      this.btnl_y * this.btnl_scale
    )
    p5.text("Upgrade Click Rate .", this.btnlX - 160, this.btnlY + 18)
    p5.text(
      this.costClickRateUpgrade[this.clickRateUpgrade.indexOf(this.clickRate)],
      this.btnlX + 50,
      this.btnlY + 18
    )
    p5.image(
      this.btnr_img,
      this.btnrX - (this.btnr_x * this.btnr_scale) / 2,
      this.btnrY - (this.btnr_y * this.btnr_scale) / 2,
      this.btnr_x * this.btnr_scale,
      this.btnr_y * this.btnr_scale
    )
    p5.text(
      this.costAutoRateUpgrade[this.autoRateUpgrade.indexOf(this.autoRate)],
      this.btnrX + 50,
      this.btnrY + 18
    )
    p5.text("Upgrade Auto Rate .", this.btnrX - 160, this.btnrY + 18)
    p5.textSize(15)
    p5.text("Next Rate .", this.btnlX + 55, this.btnlY - 32)
    p5.text(
      this.clickRateUpgrade[this.clickRateUpgrade.indexOf(this.clickRate) + 1],
      this.btnlX + 140,
      this.btnlY - 32
    )
    p5.text("Next Rate .", this.btnrX + 55, this.btnlY - 32)
    p5.text(
      this.autoRateUpgrade[this.autoRateUpgrade.indexOf(this.autoRate) + 1],
      this.btnrX + 140,
      this.btnrY - 32
    )
    p5.image(
      this.spriteL[this.sprite_index_set][this.sprite_index],
      this.spriteL_posX - this.sprite_x / 2,
      this.spriteL_posY - this.sprite_y / 2,
      this.sprite_x,
      this.sprite_y
    )
    p5.image(
      this.spriteR[this.sprite_index_set][this.sprite_index],
      this.spriteR_posX - this.sprite_x / 2,
      this.spriteR_posY - this.sprite_y / 2,
      this.sprite_x,
      this.sprite_y
    )
    this.heart_scale = 1
    this.btnl_scale = 1
    this.btnr_scale = 1
  }

  mousePressed = (p5) => {
    //click heart
    if (
      p5.mouseX > this.heartX - this.heart_x / 2 &&
      p5.mouseX < this.heartX + this.heart_x / 2 &&
      p5.mouseY > this.heartY - this.heart_y / 2 &&
      p5.mouseY < this.heartY + this.heart_y / 2
    ) {
      // this.score += this.clickRate
      this.heart_frame++
      if (this.heart_frame >= 6) {
        this.heart_frame = 0
        //moving both of sprite
        if (this.heartX - this.spriteL_posX <= 120) {
          this.spriteL_posX = this.gameWidth / 10
          this.spriteR_posX = (this.gameWidth * 9) / 10
          if (this.sprite_index_set < 5) this.sprite_index_set += 1
          else {
            this.sprite_index_set = 0
            this.sprite_index = 0
          }
        } else {
          this.spriteL_posX += 10
          this.spriteR_posX -= 10
        }
      }
      this.heart_scale += 0.2
    }

    //click upgrade clickRate
    if (
      p5.mouseX > 25 &&
      p5.mouseX < this.btnl_x + 25 &&
      p5.mouseY > this.gameHeight - this.btnl_y &&
      p5.mouseY < this.gameHeight - 25
    ) {
      this.currentClickRateIndex = this.clickRateUpgrade.indexOf(this.clickRate)
      if (this.score >= this.costClickRateUpgrade[this.currentClickRateIndex]) {
        // this.clickRate = this.clickRateUpgrade[this.currentClickRateIndex + 1]
        // this.score -= this.costClickRateUpgrade[this.currentClickRateIndex]
      } else alert("Not Enough Score!!")
      this.btnl_scale += 0.1
    }

    //click upgrade AutoRate
    if (
      p5.mouseX > this.gameWidth / 2 + 25 &&
      p5.mouseX < this.gameWidth - 25 &&
      p5.mouseY > this.gameHeight - this.btnr_y &&
      p5.mouseY < this.gameHeight - 25
    ) {
      this.currentAutoRateIndex = this.autoRateUpgrade.indexOf(this.autoRate)
      if (this.score >= this.costAutoRateUpgrade[this.currentAutoRateIndex]) {
        this.autoRate = this.autoRateUpgrade[this.currentAutoRateIndex + 1]
        this.setState({ autoRate: this.autoRate })
        // this.score -= this.costAutoRateUpgrade[this.currentAutoRateIndex]
      } else alert("Not Enough Score!!")
      this.btnr_scale += 0.1
    }
  }

  render() {
    return (
      <div id="canvas-container">
        <Sketch
          preload={this.preload}
          setup={this.setup}
          draw={this.draw}
          mousePressed={this.mousePressed}
        />
        <Interval
          name="autoRate_click"
          timeout={1000 / this.state.autoRate}
          enabled={this.state.autoRate}
          callback={() => {
            console.log("Clicking")
            //click heart
            // this.score++
            this.heart_frame++
            if (this.heart_frame >= 6) {
              this.heart_frame = 0
              //moving both of sprite
              if (this.heartX - this.spriteL_posX <= 120) {
                this.spriteL_posX = this.gameWidth / 10
                this.spriteR_posX = (this.gameWidth * 9) / 10
              } else {
                this.spriteL_posX += 4
                this.spriteR_posX -= 4
              }
            }
            this.heart_scale += 0.2
          }}
        ></Interval>
        <Interval
          timeout={66}
          enabled={true}
          callback={this.changeFrame}
        ></Interval>
      </div>
    )
  }
}

export default Play
