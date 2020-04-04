import React, { Component } from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavLink from "react-bootstrap/NavLink"
import { Link } from "react-router-dom/"

import Login from "../../Login"

class NavbarMenu extends Component {
  render() {
    return (
      <Navbar sticky="top">
        <Navbar.Brand href="#home">
          <img src="img/logo.jpg"></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink>
            <Link to="/">HOME</Link>
          </NavLink>
          <NavLink>
            <Link to="/play">PLAY</Link>
          </NavLink>
          <NavLink>
            <Link to="#">SCOREBOARD</Link>
          </NavLink>
          <NavLink>
            <Link to="#">OUR TEAM</Link>
          </NavLink>
        </Nav>
        {this.props.login.render()}
      </Navbar>
    )
  }
  // render() {
  //   return (
  //     <section id="nav-bar">
  //       {" "}
  //       <nav class="navbar navbar-expand-lg navbar-light">
  //         <a class="navbar-brand" href="#">
  //           <img src="img/logo.jpg"></img>
  //         </a>
  //         <button
  //           class="navbar-toggler"
  //           type="button"
  //           data-toggle="collapse"
  //           data-target="#navbarNav"
  //           aria-controls="navbarNav"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse" id="navbarNav">
  //           <ul class="navbar-nav ml-auto">
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 HOME
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 PLAY
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 SCOREBOARD
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 OUR TEAM
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>
  //     </section>
  //   )
  // }
}

export default NavbarMenu
