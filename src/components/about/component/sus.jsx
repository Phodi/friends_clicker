import React, { Component } from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Sus extends Component{
    constructor(props) {
        super(props)
        this.state = {}
      }
   render(){
       return(
        <div>
          <center>
          
            
            <div class ="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="list-group-item list-group-item-action" role="tab">
                  <Accordion>
                  <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body1</Card.Body>
                  </Accordion.Collapse>
                  </Card>
                  </Accordion>
                  </div>
                </div>
              <div class="col-md-4">
                <div class="list-group-item list-group-item-action" role="tab">
                  {/* <img src="./img/hqdefault.jpg" alt=""/> */}
                  <Accordion>
                  <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body2</Card.Body>
                  </Accordion.Collapse>
                  </Card>
                  </Accordion>
                </div>
              </div>
              <div class="col-md-4">
                <div class="list-group-item list-group-item-action" role="tab">
                <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body3</Card.Body>
                  </Accordion.Collapse>
                  </Card>
                  </Accordion>
                </div>
              </div>
            </div>
            </div>
            
          
          </center>
          
          
        </div>
       )
   }
}
export default Sus