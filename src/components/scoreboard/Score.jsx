import React, { Component } from "react"
const numeral = require("numeral")

export default class Score extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shortFormat: true,
    }
  }

  onClick = () => {
    this.setState({ shortFormat: !this.state.shortFormat })
  }
  render() {
    return (
      <tr onClick={this.onClick}>
        <td>{this.props.name}</td>
        <td style={{ "text-transform": "capitalize" }}>
          {this.state.shortFormat
            ? numeral(this.props.score).format("0[.]00 a")
            : numeral(this.props.score).format("0[.]00")}
        </td>
      </tr>
    )
  }
}
