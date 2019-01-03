import React from 'react'
import RadioGroup from './RadioGroup'
import RadioOption from './RadioOption'

export default class DayOfTheWeekCalculator extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     day: '',
  //     month: '',
  //     year: '',
  //   }
  // }

  state = {
  day: '',
  month: '',
  year: '',
  }

  onDayChange = (e) => {
    // console.log(e.target.value)
    const day = e.target.value
    this.setState(() => ({
      day
    }))
  }

  render() {
    return (
      <div>
        <form id="date-form">
          <input value={this.state.day} onChange={this.onDayChange} name="day"  type="text"/>
          <input value={this.state.year}  name="year" type="text"/>
          <RadioGroup 
            name="month"
            onChange={this.onMonthChange}
            value="1"
          >
            <RadioOption value="1">January</RadioOption>
            <RadioOption value="2">February</RadioOption>
            <RadioOption value="3">March</RadioOption>
            <RadioOption value="4">April</RadioOption>
            <RadioOption value="5">May</RadioOption>
            <RadioOption value="6">June</RadioOption>
            <RadioOption value="7">July</RadioOption>
            <RadioOption value="8">August</RadioOption>
            <RadioOption value="9">September</RadioOption>
            <RadioOption value="10">October</RadioOption>
            <RadioOption value="11">November</RadioOption>
            <RadioOption value="12">December</RadioOption>
          </RadioGroup>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


