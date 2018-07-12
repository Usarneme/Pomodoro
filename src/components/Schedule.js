import React from 'react'
import '../styles/Schedule.css'

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [...props.schedule],
      currentTimer: this.props.current
    }
  }

  render() {
    return (
      <div className="scheduleContainer">
        <h2 className="scheduleHeader">Schedule</h2>
        <ul className="scheduleUl">
        { this.state.schedule.map((time, idx) => {
          return idx === this.state.currentTimer ? <li key={idx} className="scheduleLi currentTimer" >{time / 60} minutes</li> : <li key={idx} className="scheduleLi" >{time / 60} minutes</li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default Schedule
