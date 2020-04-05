import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"

//Components
import NavMenu from "./components/NavMenu"
import Notifier from "./components/Notifier"
import { AlertList } from "react-bs-notifier"

//Pages
import Homepage from "./components/homepage/Homepage"
import Play from "./components/play/Play"
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
      notifier: new Notifier({
        setAlerts: (newAlert) => {
          this.setState({ alerts: newAlert })
        },
      }),
      alerts: [],
    }
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
            notifier={this.state.notifier}
          ></NavMenu>
          <AlertList
            position={this.state.notifier.state.position}
            alerts={this.state.alerts}
            timeout={this.state.notifier.state.timeout}
            dismissTitle="Dismiss"
            onDismiss={this.state.notifier.onAlertDismissed.bind(this)}
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
              path="/about"
              render={() => (
                <About
                  session={this.state.session}
                  setSession={this.setSession}
                ></About>
              )}
            ></Route>
          </div>
        </Container>
      </Switch>
    )
  }
}

export default App
