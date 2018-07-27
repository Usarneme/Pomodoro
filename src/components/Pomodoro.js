// React
import React, { Component } from 'react'

// Components
import CountdownTimer from './CountdownTimer'
import Controls from './Controls'
import Schedule from './Schedule'
import About from './About'

// Resources - Audio
import Music_Box_Notification from '../sounds/Music_Box_Notification.mp3'

// Resources - Stylesheets
import '../styles/reset.css'
import '../styles/Pomodoro.css'

// Pomodoro 25 mins * 60 secs = 1500
// Short Break 5 mins * 60 = 300
// Long Break 15 mins * 60 = 900
class Pomodoro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [
        // 25 on, 5 off, 25 on, 5 off, 25 on, 5 off, 25 on, 15 off
        1500,300,1500,300,1500,300,1500,900
      ],
      current: 0,
      maxTimerLength: 1500,
      currentCount: 1500,
      timerRunning: false,
      scheduleShowing: true
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

  // Prevent a memory leak by clearing the interval if the component ever gets unmounted
  componentWillUnmount() {
    clearInterval(this.intervalId)
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

  render() {
    return (
      <div className="container">
        <CountdownTimer currentCount={this.state.currentCount} />

        <Controls 
          pause={this.pause}
          start={this.start}
          reset={this.reset}
        />

        <Schedule 
          schedule={this.state.schedule} 
          current={this.state.current} 
          scheduleShowing={this.state.scheduleShowing} 
          setTimerTo={this.setTimerTo}
        /> 

        <About />

        <audio ref={(x) => { this.Sound_Ref = x; }} src={Music_Box_Notification} type="audio/mp3" />
      </div>
    )
  }
}

export default Pomodoro
