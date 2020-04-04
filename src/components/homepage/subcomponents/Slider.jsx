import React, { Component } from "react"

import Carousel from "react-bootstrap/Carousel"

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/banner1.jpg"
              alt="How To Make Friend"
            />
            <Carousel.Caption>
              <h5>How To Make Friend</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/banner2.jpg"
              alt="How To Make Best Friend"
            />
            <Carousel.Caption>
              <h5>How To Make Best Friend</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/banner3.jpg"
              alt="How To Make Boy Friend"
            />
            <Carousel.Caption>
              <h5>How To Make Boy Friend</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Slider
