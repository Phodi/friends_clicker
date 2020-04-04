import React, { Component } from "react"

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "SATAN", luckyNumber: 666 } //เก็บตัวแปรต่างๆที่จะใช้ไว้ในนี้
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

  //แสดงผล HTML
  render() {
    return (
      <div>
        {"ทำ HTML ใดๆตรงนี้ "}
        <button onClick={this.showStates}>Run showStates()</button>{" "}
        <button onClick={this.editStates}>Run editStates()</button>
      </div>
    )
  }
}

export default Play
