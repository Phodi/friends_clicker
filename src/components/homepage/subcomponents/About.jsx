import React, { Component } from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GifPlayer from 'react-gif-player'
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section id="about">
        <div className="container" style={{color: "white"}}>
          <div className="row">
            <div className="col-md-6">
              <h2>Friend Clicker</h2>
              <div className="about-content">
                This game is boy love simulation story abou how to get in relationship 
                with other guy with click mouse
              </div>
              <Accordion>     
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <button type="button" className="btn btn-primary">
               How to play?
              </button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card style={{"background-color": "rgba(255,255,255,0.7)"}}>
              <Card.Body> <div className="col-md-12">
                        <div className="col-md-12">
                          <p style={{color: "black"}}>
                          - Click a heart to get point 
                          </p>
                          <div>
                        <GifPlayer gif="./img/ezgif-7-517d28a1c5ba.gif" still="./img/ezgif-7-517d28a1c5ba.jpg" style={{'borderRadius':'5px'}} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <p style={{color: "black"}}>
                          <br/>
                        - Click this upgrade to get better point
                        
                        <img src="./img/upgrade.jpg" alt="" width="50%" height="auto" /> 
                        <br/> <br/> - Click this upgrad to get auto point
                        <img src="./img/auto.jpg" alt="" width="50%" height="auto" />
                        </p>
                        </div>
              </div>
              </Card.Body>
              </Card>
              </Accordion.Collapse>
              
              </Accordion>
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
