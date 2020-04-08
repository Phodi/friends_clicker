import React, { Component } from "react"
import "./about.css" //Import css จากไฟล์นี้ (จะใช้อะไรก้อไปเพิ่มเอา)

import Aboutus from "./component/Aboutus"

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "SATAN", luckyNumber: 666 } //เก็บตัวแปรต่างๆที่จะใช้ไว้ในนี้ (ข้างในนี้คือตัวอย่างลบได้)
  }
  //ประกาศฟังค์ชั่นที่จะใช้ไว้แถวๆนี้ (ข้างล่างนี้คือตัวอย่างลบทิ้งได้)
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
        {/* เขียน HTML ต่างๆจรงนี้ */}
        <Aboutus></Aboutus>

        
        {/* เวลาตั้ง class HTML ให้ใช้ className แทน */}
        {/* เช่น <div class="kuy"> เป็น <div className="kuy"> */}
        {/* ตัวอย่างลบได้ */}
        {"Hello World!"}
        <button onClick={this.showStates}>Run showStates()</button>{" "}
        <button onClick={this.editStates}>Run editStates()</button>
        
      </div>
    )
  }
}

export default Play
