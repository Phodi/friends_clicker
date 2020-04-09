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
        <div className="my-4">
          <ScoreboardActual
            session={this.props.session}
            alert={this.props.alert}
          ></ScoreboardActual>
        </div>
      </div>
    )
  }
}

export default Scoreboard
