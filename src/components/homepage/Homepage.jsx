import React, { Component } from "react"

import Slider from "./subcomponents/Slider"
import About from "./subcomponents/About"

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Slider></Slider>
        <About></About>
      </div>
    )
  }
}

export default Homepage
