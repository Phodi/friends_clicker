import React, { Component } from 'react'
let hit =1;
export default class AddTransaction extends Component {
  
  // state = {
  //   name:'',
  //   amount:''
  // }
  
  constructor(){
    super()
    this.state={
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }
  // state =this.state = {
    
  //   count:0

  //   // this.handleClick =this.handleClick.bind(this);
  //   };

  handleClick(){
    // alert("sus")
    this.setState(prevState =>{
      return{ 
        count: prevState.count + hit
      }
    })
  }
  handleClick2(){
    this.setState(prevState =>{
       hit += 10
      
    })
  }

  // onSubmit = (e) => {
  //   alert("Sus")
  //   // e.preventDefault();
  //   // this.props.AddTransaction()
  //   // this.props.addTransaction(this.state.name, this.state.amount);
  //   // this.setState( { name:'', amount:'' });
  // }
  
  render() {
    return (
      <div>
        <form id="add-transaction_form" onSubmit={this.onSubmit}>
          <div>
            <h1> Point = {this.state.count}</h1>
            
          </div>

          <input onClick= {this.handleClick} type="button" value="Hit!!!" className="btn btn-primary btn-block"/>
          <input onClick= {this.handleClick2} type="button" value="Upgrade" className="btn btn-primary btn-block"/>
        </form>
      </div>
    )
  }
}
