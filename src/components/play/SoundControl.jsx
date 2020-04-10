import React, { Component } from "react"
import Sound from "react-sound"

class SoundControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      soundsLoaded: 0,
    }
  }
  onLoad = () => {
    this.setState({ soundsLoaded: this.state.soundsLoaded + 1 })
    if (this.state.soundsLoaded >= this.props.soundUrls.length)
      this.props.onLoadFinished()
  }
  render() {
    return (
      <div>
        {this.props.soundUrls.map((url, index) => (
          <Sound
            url={url}
            playStatus={this.props.playStatus[index]}
            playFromPosition={0}
            onLoad={this.onLoad}
          ></Sound>
        ))}
      </div>
    )
  }
}

export default SoundControl
