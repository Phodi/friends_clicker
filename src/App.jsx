import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"

//Components
import NavMenu from "./components/homepage/subcomponents/NavMenu"

//Pages
import Homepage from "./components/homepage/Homepage"

function App() {
  return (
    <Router>
      <Container fluid>
        <NavMenu></NavMenu>
        <Route exact path="/" component={Homepage}></Route>
      </Container>
    </Router>
  )
}

export default App
