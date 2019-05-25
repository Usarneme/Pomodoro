// React
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

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
      <div className="application">
        <Helmet>
          {/* Chrome (and Android) */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Tom's Pomodoro" />
          <link rel="icon" sizes="192x192" href="../images/android-chrome-192x192.png" />
          <link rel="icon" sizes="512x512" href="../images/android-chrome-512x512.png" />
          {/* Safari on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#c2f5e6" />
          <meta name="apple-mobile-web-app-title" content="Tom's Pomodoro" />
          <link rel="apple-touch-icon" href="../images/apple-touch-icon.png" />
          {/* Tile icon for Win8 (144x144 + tile color) */}
          <meta name="msapplication-TileImage" content="../images/android-chrome-192x192.png" />
          <meta name="msapplication-TileColor" content="#c2f5e6" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="msapplication-starturl" content="/" />
          {/* Progressive Web App manifest */}
          <meta name="theme-color" content="#c2f5e6" />
          {/* Favicon */}
          <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico" />
        </Helmet>
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
      </div>
    )
  }
}

export default Pomodoro
