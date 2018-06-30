import React from 'react'
import '../styles/Schedule.css'

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [...props.schedule],
      currentTimer: 0
    }
  }

  render() {
    return (
      <div className="scheduleContainer">
        <h2 className="scheduleHeader">Schedule</h2>
        <ul className="scheduleUl">
        { this.state.schedule.map((time, idx) => {
          return <li key={idx} className="scheduleLi">
            {time / 60} minutes
            </li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default Schedule
