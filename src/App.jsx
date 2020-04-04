import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"

//Components
import NavMenu from "./components/homepage/subcomponents/NavMenu"

//Pages
import Homepage from "./components/homepage/Homepage"
import Play from "./components/play/Play"

function App() {
  return (
    <Router>
      <Container fluid className="m-0 p-0">
        <NavMenu></NavMenu>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/play" component={Play}></Route>
      </Container>
    </Router>
  )
}

export default App
