import React, { Component } from "react"

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

import Button from "react-bootstrap/Button"

class LoginMini extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      credentials: { email: "", password: "" },
      token: "",
    }
  }

  login = () => {
    console.log(document.findById("form-email").val())
    this.setState({ loggedIn: true })
  }

  fieldChanged = (e) => {
    console.log(e.target.name, e.target.value)
  }

  render() {
    if (this.state.loggedIn) {
      return <div>Logged In</div>
    }

    return (
      <Form inline>
        <FormControl
          name="email"
          type="email"
          placeholder="email"
          className="mr-sm-2"
          onChange={this.fieldChanged}
        />
        <FormControl
          name="password"
          type="password"
          placeholder="password"
          className="mr-sm-2"
          onChange={this.fieldChanged}
        />
        <Button variant="outline-info" onClick={this.login}>
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginMini
