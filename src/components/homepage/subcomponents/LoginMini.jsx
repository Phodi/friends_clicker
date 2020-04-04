import React, { Component } from "react"

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

import Button from "react-bootstrap/Button"

class LoginMini extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false, token: "" }
  }
  render() {
    if (this.state.loggedIn) {
      return <div>Logged In</div>
    }

    return (
      <Form inline>
        <FormControl type="email" placeholder="email" className="mr-sm-2" />
        <FormControl
          type="password"
          placeholder="password"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Login</Button>
      </Form>
    )
  }
}

export default LoginMini
