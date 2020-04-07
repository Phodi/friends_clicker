import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

//Components
import NavMenu from "./components/NavMenu"
import { AlertList } from "react-bs-notifier"

//Pages
import Homepage from "./components/homepage/Homepage"
import Play from "./components/play/Play"
import Scoreboard from "./components/scoreboard/Scoreboard"
import About from "./components/about/About"

import axios from "axios"
const API_URL = "/api"

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = { login: new Login({ apiUrl: API_URL }) }
    this.state = {
      session: {
        axios: axios.create({
          baseURL: API_URL,
          validateStatus: (status) => status < 500,
        }),
        loggedIn: false,
        credentials: { email: "", password: "" },
        token: "",
        user: { _id: "", name: "", emai: "", stats: {} },
      },
      alerts: [],
      showRegist: false,
    }
  }

  generateAlert = (type, head, body) => {
    const newAlert = {
      id: new Date().getTime(),
      type: type,
      headline: `${head}`,
      message: body,
    }

    this.setState({
      alerts: [...this.state.alerts, newAlert],
    })
  }

  onAlertDismissed(alert) {
    const alerts = this.state.alerts

    // find the index of the alert that was dismissed
    const idx = alerts.indexOf(alert)

    if (idx >= 0) {
      // remove the alert from the array
      this.setState({
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)],
      })
    }
  }

  triggerRegist = () => {
    this.setState({ showRegist: true })
  }

  closeRegist = () => {
    this.setState({ showRegist: false })
  }

  setSession = (session) => {
    this.setState({ session: Object.assign(this.state.session, session) })
    this.state.session.axios.defaults.headers.common[
      "Authorization"
    ] = this.state.session.token
  }

  render() {
    return (
      <Switch>
        <Container fluid className="m-0 p-0">
          <NavMenu
            session={this.state.session}
            setSession={this.setSession}
            alert={this.generateAlert}
            triggerRegist={this.triggerRegist}
          ></NavMenu>
          <AlertList
            position="top-right"
            alerts={this.state.alerts}
            timeout={2000}
            dismissTitle="dismiss"
            onDismiss={this.onAlertDismissed.bind(this)}
          />
          <div className="content">
            <Route
              exact
              path="/"
              render={() => (
                <Homepage
                  session={this.state.session}
                  setSession={this.setSession}
                ></Homepage>
              )}
            ></Route>
            <Route
              exact
              path="/play"
              render={() => (
                <Play
                  session={this.state.session}
                  setSession={this.setSession}
                ></Play>
              )}
            ></Route>
            <Route
              exact
              path="/scoreboard"
              render={() => (
                <Scoreboard
                  session={this.state.session}
                  alert={this.generateAlert}
                ></Scoreboard>
              )}
            ></Route>
            <Route
              exact
              path="/about"
              render={() => (
                <About
                  session={this.state.session}
                  setSession={this.setSession}
                ></About>
              )}
            ></Route>
          </div>
          <Modal show={this.state.showRegist} onHide={this.closeRegist}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Switch>
    )
  }
}

export default App
