import React, { Component } from "react"
import Sketch from "react-p5"
import "./play.css"

class Play extends Component {
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)
  score = 0;
  img = null;
  heartX = 450;
  heartY = 225;

  preload = (p5) => {
    this.img = p5.loadImage("/game/img/heart.png")
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 550).parent(canvasParentRef)
  }
  draw = (p5) => {
    p5.background(100);
    p5.image(this.img, this.heartX, this.heartY, 100, 100);
    p5.textSize(50);
    p5.text(this.score, 50, 50);
  }

  mousePressed = (p5) => {
    if(p5.mouseX > this.heartX && p5.mouseX < this.heartX + 100 && p5.mouseY > this.heartY && p5.mouseY < this.heartY+100) {
      this.score++;
    }

  }

  render() {
    return <div id="canvas-container">
      <Sketch preload={this.preload} setup={this.setup} draw={this.draw} mousePressed={this.mousePressed}/>
      </div>
  }
}

export default Play
