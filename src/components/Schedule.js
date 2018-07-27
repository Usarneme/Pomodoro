import React from 'react'
import '../styles/Schedule.css'

const Schedule = (props) => {

  return (
    <div className="scheduleContainer">
      <h2 className="scheduleHeader">Schedule</h2>
      <ul className="scheduleUl">
      { props.schedule.map((time, idx) => {
        return idx === props.currentTimer ? <li key={idx} className="scheduleLi currentTimer" >{time / 60} minutes</li> : <li key={idx} className="scheduleLi" >{time / 60} minutes</li>
        })
      }
      </ul>
      <div className="buttonsContainer">
        {
          // pomodoro 1500, short break 300, long break 900 
        }
        <button className="toggleSwitches" onClick={() => props.setTimerTo(1500)} >
          <div>Pomodoro</div> 
          <div>25 Minutes</div>
        </button>
        <button className="toggleSwitches" onClick={() => props.setTimerTo(300)} >
          <div>Short Break</div> 
          <div>5 Minutes</div> 
        </button>
        <button className="toggleSwitches" onClick={() => props.setTimerTo(900)} >
          <div>Long Break</div>
          <div>15 Minutes</div>
        </button>
      </div>
      <button className="toggleSwitches" onClick={() => props.setTimerTo(2)} >Quick!</button>
    </div>
  )
}

export default Schedule
