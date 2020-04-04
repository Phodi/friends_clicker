import React, { Component } from "react"
import "./play.css"

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "SATAN", luckyNumber: 666, exp:0.0 } //เก็บตัวแปรต่างๆที่จะใช้ไว้ในนี้
  }
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่าง)
  showStates = () => {
    //แสดงตัวแปรที่เก็บไว้ใน this.state ทาง console
    console.log("Hello World!")
    console.log("message is " + this.state.message)
    console.log("luckyNumber is " + this.state.luckyNumber)
  }
  editStates = () => {
    //แก้ไข ตัวแปรใน this.state
    this.setState({ message: "KUY", luckyNumber: 69 })
  }
  addExp = () => {
    this.state.exp+=1.0;
    this.drawText();
  }
  drawText = () =>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 900, 500); //ล้างหน้า canvas
    ctx.font = "30px Arial";
    ctx.fillText(this.state.exp, 10, 50);
  }

  //แสดงผล HTML
  render() {
    return (
      <div>
        {<body>
            <div id ="canvas-container">
              <canvas id ="myCanvas" width="900" height="500">
              </canvas>
            </div>
        </body>}
        <button onClick={this.showStates}>Run showStates()</button>{" "}
        <button onClick={this.editStates}>Run editStates()</button>
        <button onClick={this.addExp}>AddExp()</button>
      </div>
    )
  }
}

export default Play
