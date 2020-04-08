import React, { Component } from "react"
import Sketch from "react-p5"
import "./play.css"

class Play extends Component {
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)
  score = 0;
  clickRate = 1;
  autoRate = 0;

  gameWidth = 1000;
  gameHeight = 550;

  heart_img = [];
  heart_frame = 0;
  bg_img = [];
  btnl_img = null;
  btnr_img = null;
  heart_frame = 0;

  heart_x = 100;
  heart_y = 90;
  heart_scale = 1;
  heartX = 500;
  heartY = 275;

  btnl_x = this.gameWidth/2 - 50;
  btnl_y = 80;
  btnl_scale = 1;
  btnlX = 25;
  btnlY = this.gameHeight - this.btnl_y/2 - 50;

  btnr_x = this.gameWidth/2 - 50;
  btnr_y = 80;
  btnr_scale = 1;
  btnrX = this.gameWidth/2 + 25;
  btnrY = this.btnlY;


  preload = (p5) => {
    //Load Heart animation frame
    this.heart_img.push(p5.loadImage("/game/img/heart/0.png"));
    this.heart_img.push(p5.loadImage("/game/img/heart/1.png"));
    this.heart_img.push(p5.loadImage("/game/img/heart/2.png"));
    this.heart_img.push(p5.loadImage("/game/img/heart/3.png"));
    this.heart_img.push(p5.loadImage("/game/img/heart/4.png"));
    this.heart_img.push(p5.loadImage("/game/img/heart/5.png"));

    //Load BG Level
    this.bg_img.push(p5.loadImage("/game/img/bg/0.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/1.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/2.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/3.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/4.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/5.png"));
    this.bg_img.push(p5.loadImage("/game/img/bg/6.png"));

    //Load button
    this.btnl_img = p5.loadImage("/game/img/btn/left.png");
    this.btnr_img = p5.loadImage("/game/img/btn/right.png");
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.gameWidth, this.gameHeight).parent(canvasParentRef)
  }
  draw = (p5) => {
    
    p5.image(this.bg_img[this.autoRate],0,0,1000,550);
    p5.image(this.heart_img[this.heart_frame],this.heartX - this.heart_x*this.heart_scale/2, this.heartY - this.heart_y*this.heart_scale/2, this.heart_x*this.heart_scale,this.heart_y*this.heart_scale);
    p5.image(this.btnl_img,this.btnlX, this.btnlY, this.btnl_x, this.btnl_y);
    p5.image(this.btnr_img,this.btnrX, this.btnrY, this.btnr_x, this.btnr_y);
    p5.textSize(50);
    p5.text(this.score, 50, 50);
    p5.text(this.clickRate, 150, 50);
    p5.text(this.autoRate, 250, 50);
    this.heart_scale = 1;
  }

  mousePressed = (p5) => {

    //click heart
    if(p5.mouseX > this.heartX - this.heart_x/2 && p5.mouseX < this.heartX + this.heart_x/2 && p5.mouseY > this.heartY - this.heart_y/2 && p5.mouseY < this.heartY + this.heart_y/2) 
    {
      this.score+=this.clickRate;
      this.heart_frame++;
      if(this.heart_frame >= 6) this.heart_frame = 0;
      this.heart_scale += 0.2;
    }
    

    //click upgrade clickRate
    if(p5.mouseX > 50 && p5.mouseX < this.gameWidth/2 - 25 && p5.mouseY > this.gameHeight - this.btnl_y - 12.5 && p5.mouseY < this.gameHeight - 12.5)
      {
        this.clickRate += 1;
      }
    
    //click upgrade AutoRate
    if(p5.mouseX > this.gameWidth/2 + 25 && p5.mouseX < this.gameWidth - 25 && p5.mouseY > this.gameHeight - this.btnl_y - 12.5 && p5.mouseY < this.gameHeight - 12.5)
      {
        if(this.autoRate< 6)
        this.autoRate += 1;
      }
  }



  render() {
    return <div id="canvas-container">
      <Sketch preload={this.preload} setup={this.setup} draw={this.draw} mousePressed={this.mousePressed}/>
      </div>
  }
}

export default Play
