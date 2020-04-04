import React, { Component } from "react"
class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="slider">
        <div id="headerSlider" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#headerSlider"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#headerSlider" data-slide-to="1"></li>
            <li data-target="#headerSlider" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                img-fluid
                src="./img/banner1.jpg"
                class="d-block w-100"
              ></img>
              <div class="carousel-caption">
                <h5>How To Make Friend</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                img-fluid
                src="./img/banner2.jpg"
                class="d-block w-100"
              ></img>
              <div class="carousel-caption">
                <h5>How To Make Best Friend</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                img-fluid
                src="./img/banner3.jpg"
                class="d-block w-100"
              ></img>
              <div class="carousel-caption">
                <h5>How To Make Boy Friend</h5>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#headerSlider"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#headerSlider"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Slider
