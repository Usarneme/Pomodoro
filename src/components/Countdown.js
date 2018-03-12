import React from 'react'

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
      <div className="countdown">
        <span className="minutes">
          { Math.floor(this.state.currentCount / 60) }
        </span>
        :
        <span className="seconds">
          { (this.state.currentCount % 60) }
        </span>
      </div>
    )
  }
}

export default Countdown