import React, { Component } from 'react'
import CountdownTimer from './CountdownTimer'
import CustomScheduler from './CustomScheduler'
import Controls from './Controls'
import Schedule from './Schedule'
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
      current: 0,
      scheduleShowing: true
    }
  }

  render() {
    return (
      <div className="container">
        <CountdownTimer timerLength={this.state.schedule[this.state.current]} />
        <Controls timerLength={this.state.schedule[this.state.current]} />
        {
          this.state.scheduleShowing ? ( 
          <Schedule 
            schedule={this.state.schedule} 
            current={this.state.current} 
            scheduleShowing={this.state.scheduleShowing} /> 
          ) : ( 
            <CustomScheduler timerLength={this.state.schedule[this.state.current]} /> 
          )
        }
        <About />
      </div>
    )
  }
}

export default App
