import React, { Component } from "react"
import Sketch from "react-p5";
import "./play.css"
import heart from "./img/heart.png";

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "SATAN", exp:0.0, level:1} //เก็บตัวแปรต่างๆที่จะใช้ไว้ในนี้
  }
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)
  x = 50;
  y = 50;
 
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = p5 => {
    p5.background(0);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

export default Play
