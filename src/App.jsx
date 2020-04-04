import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"

//Components
import NavMenu from "./components/homepage/subcomponents/NavMenu"
import Login from "./components/Login"

//Pages
import Homepage from "./components/homepage/Homepage"
import Play from "./components/play/Play"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { login: new Login() }
  }
  render() {
    return (
      <Switch>
        <Container fluid className="m-0 p-0">
          <NavMenu login={this.state.login}></NavMenu>
          <div className="content">
            <Route
              exact
              path="/"
              render={() => <Homepage login={this.state.login}></Homepage>}
            ></Route>
            <Route
              exact
              path="/play"
              render={() => <Play login={this.state.login}></Play>}
            ></Route>
          </div>
        </Container>
      </Switch>
    )
  }
}

export default App
