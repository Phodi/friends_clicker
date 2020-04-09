import React, { Component } from "react"
import Score from "./Score"

class ScoreboardActual extends Component {
  constructor(props) {
    super(props)
    this.state = { processing: false, scores: [] }
  }

  componentDidMount() {
    this.loadScores()
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
  loadScores = async () => {
    const axios = this.props.session.axios
    this.setState({ processing: true })
    let resp = null
    try {
      resp = await axios.get("/scoreboard")
      if (resp.data) {
        this.setState({ scores: resp.data.data })
      }
    } catch (error) {
      resp = error
      console.log("error :", error)
    } finally {
      this.finalReport(resp)
      this.setState({ processing: false })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3>Scoreboard</h3>
          </div>
          <div className="col-4">
            {this.state.processing ? (
              <div>Refreshing</div>
            ) : (
              <div onClick={this.loadScores}>
                <span>
                  <img
                    className="img-fluid"
                    style={{ width: "6%", height: "auto" }}
                    src="/img/refresh-icon.png"
                  ></img>
                </span>
                Refresh
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody id="transaction-list">
              {this.state.scores.map((score) => (
                <Score
                  name={score.user.name}
                  score={score.currentScore}
                ></Score>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ScoreboardActual
