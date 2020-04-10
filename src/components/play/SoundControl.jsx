import React, { Component } from "react"
import Sound from "react-sound"

class SoundControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      soundsLoaded: 0,
    }
  }
  render() {
    return (
      <div>
        {this.props.soundUrls.map((url, index) => (
          <Sound
            url={url}
            playStatus={this.props.playStatus[index]}
            playFromPosition={0}
            onFinishedPlaying={() => {
              if (this.props.soundLoop[index]) {
                this.props.setPlayStatus(url, Sound.status.PLAYING)
              } else {
                this.props.setPlayStatus(url, Sound.status.STOPPED)
              }
            }}
          ></Sound>
        ))}
      </div>
    )
  }
}

export default SoundControl
