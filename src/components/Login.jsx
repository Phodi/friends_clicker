import React, { Component } from "react"

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

import Button from "react-bootstrap/Button"

class LoginMini extends Component {
  constructor(props) {
    super(props)
    this.state = {
      processing: false,
      credentials: { email: "", password: "" },
    }
  }

  componentDidUpdate() {}

  login = async () => {
    const axios = this.props.session.axios
    const { email, password } = this.state.credentials
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.post("/users/me/login", {
        email,
        password,
      })
      if (resp.data.token) {
        const user = await axios.get("/users/me", {
          headers: { Authorization: resp.data.token },
        })
        this.props.setSession({
          user: user.data.user,
          credentials: this.state.credentials,
          token: resp.data.token,
          loggedIn: true,
        })
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      if (resp.data.error) console.log("error :", resp.data.error)
      if (resp.data.msg) console.log("msg :", resp.data.msg)
      this.setState({ processing: false })
    }
  }

  logout = async () => {
    const axios = this.props.session.axios
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.get("/users/me/logout")
      if (resp.data.token) {
        this.props.setSession({ loggedIn: false })
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      if (resp.data.error) console.log("error :", resp.data.error)
      if (resp.data.msg) console.log("msg :", resp.data.msg)
      this.setState({ processing: false })
    }
  }

  fieldChanged = (e) => {
    this.setState({
      credentials: Object.assign(this.state.credentials, {
        [e.target.name]: e.target.value,
      }),
    })
  }

  render() {
    if (this.state.processing) {
      return (
        <div>{this.props.session.loggedIn ? "Logging out" : "Logging in"}</div>
      )
    }

    if (this.props.session.loggedIn) {
      return (
        <div className="row">
          <div className="col justify-content-center align-items-center align-self-center">
            {this.props.session.user.name}
          </div>
          <div className="col justify-content-center align-items-center align-self-center">
            <Button onClick={this.logout}>Logout</Button>
          </div>
        </div>
      )
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
