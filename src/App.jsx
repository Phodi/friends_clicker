import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"

import Homepage from "./components/homepage/Homepage"

function App() {
  return (
    <Container>
      <Homepage />
    </Container>
  )
}

export default App
