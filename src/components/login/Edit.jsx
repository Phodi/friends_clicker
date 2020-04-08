import React, { Component } from "react"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Row, Col } from "react-bootstrap"

const validator = require("validator")

export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      processing: false,
      username: "",
      email: "",
      password: "",
      password2: "",
    }
  }

  componentDidMount = () => {
    this.setState({
      username: this.props.session.user.name,
      email: this.props.session.credentials.email,
    })
  }

  finalReport = (resp) => {
    if (resp.data) {
      if (resp.data.error) this.props.alert("danger", "Error!", resp.data.error)
      if (resp.data.msg) this.props.alert("info", "Message", resp.data.msg)
    } else {
      //Failed to connect
      this.props.alert("danger", "Error!", "Failed to connect to the API")
    }
  }

  update = async () => {
    const alert = this.props.alert
    const { username, email, password, password2 } = this.state

    //Validate username
    if (username.length == 0) {
      alert("info", "Username", "Please enter username")
      return
    }
    if (username.includes(" ")) {
      alert("info", "Username", "Spaces are not allowed")
      return
    }

    //Validate email
    if (!validator.isEmail(email)) {
      alert("info", "Email", "Please enter valid email address")
    }

    //Validate password
    if (password.length < 6) {
      alert("info", "Password", "Password must have at least 6 characters")
      return
    }
    if (password !== password2) {
      alert("info", "Password", "Password does not match")
      return
    }

    //Send request
    this.setState({ processing: true })
    const { axios } = this.props.session
    let resp = null
    try {
      resp = await axios.put("/users/me", { name: username, email, password })
      console.log("resp :", resp)
      if (resp.data) {
        if (resp.data.data) {
          if (resp.data.data.user) {
            this.props.setSession({
              user: resp.data.data.user,
            })
            this.props.hide()
          }
        }
      }
    } catch (error) {
      console.log("error: " + error)
      resp = error
      this.props.setSession({ loggedIn: false })
    } finally {
      this.finalReport(resp)
      this.setState({ processing: false })
    }
  }
  fieldChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    if (this.state.processing) {
      return (
        <Modal
          size="lg"
          disabled
          show={this.props.show}
          onHide={this.props.hide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )
    }
    return (
      <Modal size="lg" disabled show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-2">
            <Col xs={2}>Username</Col>
            <Col xs={5}>
              <FormControl
                autoComplete="off"
                name="username"
                type="text"
                defaultValue={this.props.session.user.name}
                className="mr-sm-2"
                onChange={this.fieldChanged}
              />
            </Col>
            <Col xs={5}>
              Username can contain any letters or numbers, without spaces
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={2}>Email</Col>
            <Col xs={5}>
              <FormControl
                autoComplete="off"
                name="email"
                type="email"
                placeholder="email"
                defaultValue={this.props.session.user.email}
                className="mr-sm-2"
                onChange={this.fieldChanged}
              />
            </Col>
            <Col xs={5}>Please provide your email address</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={2}>Password</Col>
            <Col xs={5}>
              <FormControl
                autoComplete="off"
                name="password"
                type="password"
                placeholder="password"
                className="mr-sm-2"
                onChange={this.fieldChanged}
              />
            </Col>
            <Col xs={5}>Password should be at least 6 characters</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={2}>Confirm Password</Col>
            <Col xs={5}>
              <FormControl
                autoComplete="off"
                name="password2"
                type="password"
                placeholder="confirm password"
                className="mr-sm-2"
                onChange={this.fieldChanged}
              />
            </Col>
            <Col xs={5}>Please confirm password</Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.update}>
            Update
          </Button>
          <Button variant="secondary" onClick={this.props.hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
