import React from 'react'

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [...props.schedule]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="schedule">
          <h2>Schedule</h2>
          { this.state.schedule.map(time => `${time / 60} `) }
        </div>
      </React.Fragment>
    )
  }
}

export default Schedule
