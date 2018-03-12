import React, { Component } from 'react'
import Schedule from './Schedule'
import Countdown from './Countdown'
import './App.css'

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
      <header className="App-header">
        <h1 className="App-title">React Pomodoro</h1>
        <Countdown timerLength={this.state.schedule[this.state.current]} />
        <Schedule schedule={this.state.schedule} />
      </header>
    )
  }
}

export default App
