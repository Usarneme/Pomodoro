import React from 'react'

class CustomScheduler extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
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

      </div>
    )
  }
}

export default CustomScheduler