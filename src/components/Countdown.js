import React from 'react'
import '../styles/Countdown.css'

class Countdown extends React.Component {
  // props.timerLength contains the length of the timer in milliseconds:
  constructor(props){
    super(props)
    this.state = {
      currentCount: props.timerLength
    }
    this.timer = this.timer.bind(this)
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId)
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {
    return(
      <div className="countdownContainer">
        <div className="selector">
          <span><button className="toggleSwitches">Pomodoro</button></span>
          <span><button className="toggleSwitches">Short Break</button></span>
          <span><button className="toggleSwitches">Long Break</button></span>
        </div>
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
          <span><button className="controlButton stop">Stop</button></span>
          <span><button className="controlButton start">Start</button></span>
          <span><button className="controlButton reset">Reset</button></span>
        </div>
      </div>
    )
  }
}

export default Countdown