import React, { Component } from "react"
import { AlertList, Alert, AlertContainer } from "react-bs-notifier"

class NotifierGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: "top-right",
      alerts: [],
      timeout: 0,
      newMessage: "AAAA",
    }
  }

  generate(type) {
    console.log("Received: " + type)
    const newAlert = {
      id: new Date().getTime(),
      type: type,
      headline: `Whoa, ${type}!`,
      message: this.state.newMessage,
    }

    const newList = [...this.state.alerts, newAlert]
    this.setState({
      alerts: newList,
    })
    this.props.setAlerts(newList)
  }

  onAlertDismissed(alert) {
    const alerts = this.state.alerts

    // find the index of the alert that was dismissed
    const idx = alerts.indexOf(alert)

    if (idx >= 0) {
      // remove the alert from the array
      const newList = [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      this.setState({
        alerts: newList,
      })

      this.props.setAlerts(newList)
    }
  }

  clearAlerts() {
    this.setState({
      alerts: [],
    })
    this.props.setAlerts([])
  }
}

export default NotifierGenerator
