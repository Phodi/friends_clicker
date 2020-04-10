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
              <br/>
              <Card style={{"background-color": "rgba(255,255,255,0.7)"}}>
              <Card.Body> 
                <div className="col-md-12">
                        <div className="col-md-12">
                        <p style={{color: "black" , "font-size" : "50px"}}>How to play?</p>
                          <p style={{color: "black"}}>
                          &nbsp; &nbsp; - Click a heart to get point 
                          
                          </p>
                          <div className="mb-3" >
                        <GifPlayer gif="./img/heart.gif" still="./img/heart.jpg" style={{'borderRadius':'5px' ,'margin-left':'40px'}} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <p style={{color: "black"}}>
                          
                          &nbsp; &nbsp; - Click this upgrade to get better point
                        
                        <img src="./img/upgrade.png" alt="" width="50%" height="auto" style={{'borderRadius':'5px' ,'margin-left':'40px','margin-top':'20px'}} /> 

                        <br/> <br/>  &nbsp; &nbsp;- Click this upgrade to get auto point

                        <img src="./img/auto.png" alt="" width="50%" height="auto" style={{'borderRadius':'5px' ,'margin-left':'40px','margin-top':'20px'}} />

                        </p>
                        </div>
              </div>
              </Card.Body>
              </Card>
              
              
              
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
