import React from 'react'
import '../styles/CountdownTimer.css'
import Music_Box_Notification from '../sounds/Music_Box_Notification.mp3'

class CountdownTimer extends React.Component {

  // props.timerLength contains the length of the timer in milliseconds:
  constructor(props) {
    super(props)
    this.state = {
      maxTimerLength: props.timerLength,
      currentCount: props.timerLength,
      timerRunning: false
    }
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 1) { 
      this.Sound_Ref.play()
      clearInterval(this.intervalId)
    }
  }

  // Prevent a memory leak by clearing the interval if the component ever gets unmounted
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return(
      <div className="countdownContainer">
        <div className="countdown">
          <span className="minutes">
            { Math.floor(this.state.currentCount / 60) }
          </span>
          :
          <span className="seconds">
            { (this.state.currentCount % 60) >= 10 ? (this.state.currentCount % 60) : '0'+(this.state.currentCount % 60) }
          </span>
        </div>
        <audio ref={(x) => { this.Sound_Ref = x; }} src={Music_Box_Notification} type="audio/mp3" />
      </div>
    )
  }
}

export default CountdownTimer