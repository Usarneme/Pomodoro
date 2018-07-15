import React from 'react'

class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.pause = this.pause.bind(this)
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.setTimerTo = this.setTimerTo.bind(this)
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

  render() {
    return (
      <div className="controlsContainer">
        <div className="buttonsContainer">
          <button className="controlButton pause" onClick={this.pause} >Pause</button>
          <button className="controlButton start" onClick={this.start} >Start</button>
          <button className="controlButton reset" onClick={this.reset} >Reset</button>
        </div>
      </div>
    )
  }
}

export default Controls