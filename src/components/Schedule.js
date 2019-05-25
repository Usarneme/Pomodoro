import React from 'react'
import Draggable from 'react-draggable'

import '../styles/Schedule.css'

const Schedule = (props) => {

  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  }
  
  return (
    <div className="scheduleContainer">

      <h2 className="scheduleHeader">Schedule</h2>
      <ul className="scheduleUl">
        <div className="draggable-container">
        { props.schedule.map((time, idx) => {
          return (
            <Draggable
              key={idx}
              axis="y"
              handle=".handle"
              bounds="parent"
              position={null}
              grid={[30,30]}
              // for controlled elements
              // onStart={this.handleStart}
              // onDrag={this.handleDrag}
              // onStop={this.handleStop}
              onDrag={eventLogger}
              >
              <div id={idx} className="scheduleLi handle">
                <li>{time / 60} minutes</li>
              </div>
            </Draggable>
            )
          })
        }
        </div>
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
