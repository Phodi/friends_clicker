import React, { Component } from "react"
import Card from "react-bootstrap/Card";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
class Aboutus extends Component{
    constructor(props) {
        super(props)
        this.state = { }
      }
   render(){
       return(
        <div>
          <center>
          
            <div class ="container">
              <div class="row">
                <div class="col-md-4">
                <Fade top>
                  <div class="list-group-item list-group-item-action" role="tab">
                  
                  <Card>
                  
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  
                  <Card.Body>
                  <div>
                  <Flip left cascade>
                  <p>Nitiwit Wachirawiroon 610610594</p>
                  </Flip>
                  </div>
                  </Card.Body>
           
                  </Card>
                  
                  </div>
                  </Fade>
                  
                </div>
              <div class="col-md-4">
              <Fade top collapse>
                <div class="list-group-item list-group-item-action" role="tab">
                  {/* <img src="./img/hqdefault.jpg" alt=""/> */}
                  
                  <Card>
                
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  
                  
                  <Card.Body>
                  <div>
                  <Flip left cascade>
                  Parinya Khongkhaphet 610610597
                  </Flip>
                  </div>
                  </Card.Body>
                  
                  </Card>
                  
                </div>
                </Fade>
              </div>
              
              <div class="col-md-4">
              <Fade top cascade collapse >
                <div class="list-group-item list-group-item-action" role="tab">
                
                <Card>
                  
                    
                  <img src="./img/hqdefault.jpg" width="100%" height="auto" alt=""/>
                  
                  
                  
                  <Card.Body><div>
                  <Flip left cascade>
                  Phodi Phoocharoen 610610601
                  </Flip>
                  </div></Card.Body>
                  
                  </Card>
                  
                </div>
                </Fade>
              </div>
            </div>
            </div>
            
          
          </center>
          
          
        </div>
       )
   }
}
export default Aboutus