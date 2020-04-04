import React, { Component } from "react"
import { Navbar } from "react-bulma-components/"
class NavbarMenu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="img/logo.jpg"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PLAY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SCOREBOARD
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                OUR TEAM
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavbarMenu
