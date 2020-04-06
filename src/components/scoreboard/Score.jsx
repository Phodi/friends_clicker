import React, { Component } from "react"

export default class Score extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.score}</td>
      </tr>
    )
  }
}
