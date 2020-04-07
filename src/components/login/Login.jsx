import React, { Component } from "react"

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import Regist from "./Register"

const validator = require("validator")

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      processing: false,
      credentials: { email: "", password: "" },
      showRegist: false,
    }
  }

  componentDidUpdate() {}

  finalReport = (resp) => {
    if (resp.data) {
      if (resp.data.error) this.props.alert("danger", "Error!", resp.data.error)
      if (resp.data.msg) this.props.alert("info", "Message", resp.data.msg)
    } else {
      //Failed to connect
      this.props.alert("danger", "Error!", "Failed to connect to the API")
    }
  }

  //Regist modal
  triggerRegist = () => {
    this.setState({ showRegist: true })
  }

  closeRegist = () => {
    this.setState({ showRegist: false })
  }

  //Renew
  componentDidMount() {
    this.interval = null
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setRenewInterval = () => {
    clearInterval(this.interval)
    this.interval = this.renewInterval()
  }

  //Renew token every 1.5 minutes
  renewInterval = () => {
    const interval = setInterval(() => {
      this.renew()
    }, 90000)
    return () => clearInterval(interval)
  }

  renew = async () => {
    if (!this.props.session.loggedIn) {
      clearInterval(this.interval)
      return
    }
    console.log("Renewing")
    const axios = this.props.session.axios
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.get("/users/me/renew")
      if (resp.data.token) {
        this.props.setSession({ token: resp.data.token })
      }
    } catch (error) {
      resp = error
      this.props.setSession({ loggedIn: false })
      console.log("error :", error)
    } finally {
      this.finalReport(resp)
      this.setState({ processing: false })
    }
  }

  login = async () => {
    const axios = this.props.session.axios
    const { email, password } = this.state.credentials
    if (!validator.isEmail(email)) {
      this.props.alert(
        "danger",
        "Invalid input",
        "Please enter valid email address"
      )
      return
    }
    if (password === "") {
      this.props.alert("danger", "Invalid input", "Please enter password")
      return
    }
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
        this.setRenewInterval()
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      this.finalReport(resp)

      this.setState({ processing: false })
    }
  }

  logout = async () => {
    clearInterval(this.interval)
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
      this.finalReport(resp)
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
      <div>
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
          <Button
            variant="basic"
            onClick={() => {
              this.triggerRegist()
            }}
          >
            Register
          </Button>
        </Form>
        <Regist
          show={this.state.showRegist}
          hide={this.closeRegist}
          session={this.props.session}
          setSession={this.props.setSession}
          alert={this.props.alert}
        ></Regist>
      </div>
    )
  }
}

export default Login
