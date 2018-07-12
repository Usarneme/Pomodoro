import React, { Component } from 'react'
import Schedule from './Schedule'
import Countdown from './Countdown'
import About from './About'
import '../styles/reset.css'
import '../styles/App.css'

// Pomodoro 25 mins * 60 secs = 1500
// Short Break 5 mins * 60 = 300
// Long Break 15 mins * 60 = 900
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [
        // 25 on, 5 off, 25 on, 5 off, 25 on, 5 off, 25 on, 15 off
        1500,300,1500,300,1500,300,1500,900
      ],
      current: 0
    }
  }

  render() {
    return (
      <div className="container">
        <Countdown timerLength={this.state.schedule[this.state.current]} />
        <Schedule schedule={this.state.schedule} current={this.state.current} />
        <About />
      </div>
    )
  }
}

export default App
