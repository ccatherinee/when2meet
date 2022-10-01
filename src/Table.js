// import React and ScheduleSelector
import React from "react";
import ScheduleSelector from "react-schedule-selector";

// define the a new class Table containing the ScheduleSelector component and the state it stores
class Table extends React.Component {
  // keeps track of the selected time blocks 
  state = { schedule: [] };
  // function which handles what happens when a user changes the table by dragging/painting 
  // update the schedule to keep track of the new selected time blocks 
  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule });
  };

  render() {
    // return Schedule Slector which keeps track of the selected time blocks 
    // the number of days shown, the earliest and latest times 
    // the function to call when the user changes the table 
    // how the date is displayed 
    // and colors 
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={7}
        minTime={7}
        maxTime={24}
        onChange={this.handleChange}
        dateFormat="ddd, M/D"
        selectedColor='green'
        unselectedColor='rgba(144,238,144,1)'
      />
    );
  } 
}

// export so we can use in other files (specifically index.js)
export default Table;