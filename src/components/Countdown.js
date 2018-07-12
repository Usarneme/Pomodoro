import React from 'react'
import '../styles/Countdown.css'
import Music_Box_Notification from '../sounds/Music_Box_Notification.mp3'

class Countdown extends React.Component {

  // props.timerLength contains the length of the timer in milliseconds:
  constructor(props) {
    super(props)
    this.state = {
      maxTimerLength: props.timerLength,
      currentCount: props.timerLength,
      timerRunning: false
    }

    this.timer = this.timer.bind(this)
    this.pause = this.pause.bind(this)
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.setTimerTo = this.setTimerTo.bind(this)
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

  pause() {
    if (this.state.timerRunning) {
      this.setState({
        timerRunning: false
      })
      clearInterval(this.intervalId)
    } 
  }

  start() {
    if (!this.state.timerRunning) {
      this.setState({
        timerRunning: true
      })
      this.intervalId = setInterval(this.timer, 1000)
    }
  }

  reset() {
    console.log('resetting to this.maxTimerLength '+this.state.maxTimerLength)
    clearInterval(this.intervalId)
    this.setState({
      timerRunning: false,
      currentCount: this.state.maxTimerLength
    })
  }

  setTimerTo(length = 1500) {
    clearInterval(this.intervalId)
    this.setState({
      maxTimerLength: length,
      timerRunning: false,
      currentCount: length
    })
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
        <div className="buttonsContainer">
          <button className="controlButton pause" onClick={this.pause} >Pause</button>
          <button className="controlButton start" onClick={this.start} >Start</button>
          <button className="controlButton reset" onClick={this.reset} >Reset</button>
        </div>
        <div className="selector">
        {
          // pomodoro 1500, short break 300, long break 900 
        }
          <button className="toggleSwitches" onClick={() => this.setTimerTo(1500)} >
            <div>Pomodoro</div> 
            <div>25 Minutes</div>
          </button>
          <button className="toggleSwitches" onClick={() => this.setTimerTo(300)} >
            <div>Short Break</div> 
            <div>5 Minutes</div> 
          </button>
          <button className="toggleSwitches" onClick={() => this.setTimerTo(900)} >
            <div>Long Break</div>
            <div>15 Minutes</div>
          </button>
        </div>
        <button className="toggleSwitches" onClick={() => this.setTimerTo(2)} >Quick!</button>
        <audio ref={(x) => { this.Sound_Ref = x; }} src={Music_Box_Notification} type="audio/mp3" />
      </div>
    )
  }
}

export default Countdown