import React, { Component } from "react"
import Login from "./login/Login"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavLink from "react-bootstrap/NavLink"
import { Link } from "react-router-dom/"
class NavMenu extends Component {
  render() {
    return (
      <Navbar sticky="top">
        <Navbar.Brand href="/">
          <img src="img/icon.png"></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink>
            <Link to="/">HOME</Link>
          </NavLink>
          <NavLink>
            <Link to="/play">PLAY</Link>
          </NavLink>
          <NavLink>
            <Link to="/scoreboard">SCOREBOARD</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">OUR TEAM</Link>
          </NavLink>
        </Nav>
        <Login
          session={this.props.session}
          setSession={this.props.setSession}
          alert={this.props.alert}
          triggerRegist={this.props.triggerRegist}
        ></Login>
      </Navbar>
    )
  }
}

export default NavMenu
