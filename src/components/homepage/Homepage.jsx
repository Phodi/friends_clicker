import React, { Component } from "react"

import { Box } from "react-bulma-components/"

import NavMenu from "./subcomponents/NavMenu"
import Slider from "./subcomponents/Slider"
import About from "./subcomponents/About"

class Homepage extends Component {
  render() {
    return (
      <Box>
        <NavMenu></NavMenu>
        <Slider></Slider>
        <About></About>
      </Box>
    )
  }
}

export default Homepage
