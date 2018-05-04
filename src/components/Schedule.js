import React from 'react'
import '../styles/Schedule.css'

const Schedule = (props) => {
  return (
    <div className="scheduleContainer">
      <h2 className="scheduleHeader">Schedule</h2>
      <ul className="scheduleUl">
      { props.schedule.map((time, idx) => {
        return <li key={idx} className="scheduleLi">
          {time / 60} minutes
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default Schedule
