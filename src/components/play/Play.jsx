import React, { Component } from "react"
import Sketch from "react-p5"
import "./play.css"

class Play extends Component {
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)
  x = 50
  y = 50

  img = null
  preload = (p5) => {
    this.img = p5.loadImage("/play/img/heart.png")
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  }
  draw = (p5) => {
    p5.background(0)
    p5.ellipse(this.x, this.y, 70, 70)
    p5.image(this.img, 0, 0, 500, 500)
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++
  }

  render() {
    return <Sketch preload={this.preload} setup={this.setup} draw={this.draw} />
  }
}

export default Play
