import React, { Component } from "react"

import ScoreboardActual from "./ScoreboardActual"

class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container mx-auto">
        <ScoreboardActual
          session={this.props.session}
          alert={this.props.alert}
        ></ScoreboardActual>
      </div>
    )
  }
}

export default Scoreboard
