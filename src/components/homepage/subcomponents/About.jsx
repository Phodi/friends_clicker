import React, { Component } from "react"
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <div className="about-content">
                These scars long have yearned for your tender caress To bind our
                fortunes, damn what the stars own Rend my heart open, then your
                love profess A winding, weaving fate to which we both atone
              </div>
              <button type="button" className="btn btn-primary">
                Read more>>
              </button>
            </div>
            <div className="col-md-6">
              <p>Easy To Play</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>
                  ♥ ♥ ♥ ♥
                </div>
              </div>
              <p>Do Not Always Online</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "60%" }}>
                  ♥ ♥ ♥
                </div>
              </div>
              <p>Keep Your Score Forever</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }}>
                  ♥ ♥ ♥ ♥ ♥
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
