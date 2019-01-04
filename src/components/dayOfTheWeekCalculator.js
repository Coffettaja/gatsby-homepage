import React from 'react'
import RadioGroup from './RadioGroup'
import RadioOption from './RadioOption'

const MONTH_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default class DayOfTheWeekCalculator extends React.Component {
  state = {
    day: '',
    month: '',
    year: '',
    isLeapYear: false,
    error: '',
  }

  onDayChange = (e) => {
    const day = e.target.value.trim()

    // Only allow numbers
    if (isNaN(+year)) {
      return
    }

    this.setState(() => ({
      day
    }))
  }

  /**
   * Validates the input value, and changes the year and isLeapYear in 
   * the component state accordingly. 
   * @memberof DayOfTheWeekCalculator
   */
  onYearChange = (e) => {
    const year = e.target.value.trim()
    let isLeapYear = false;

    // Only allow numbers
    if (isNaN(+year))
    {
      return
    }
    
    // if there is some value in year input field, check if it is a leap year or not.
    if (year.length > 0) {
      // Every fourth year is a leap year, except every 100 years. But then every 400 years is a leap year anyway.
      isLeapYear = (+year % 400 === 0 || (+year % 4 === 0 && +year % 100 !== 0))
    }

    this.setState(() => ({
      year,
      isLeapYear
    }))
  }

  onMonthChange = (e) => {
    const month = e.target.value
    // In current setup, this should never happen
    if (month < 0 || month >= 12) {
      this.setState(() => ({
        error: `Invalid month value: ${month}.`
      }))
      return
    }
    this.setState(() => ({
      month
    }))
  }

  render() {
    return (
      <div>
        <h1>The selected date is {this.state.day} {MONTH_LIST[this.state.month - 1]} {this.state.year}. Leap year? {this.state.isLeapYear.toString()}</h1>
        <form id="date-form">
          <input value={this.state.day} onChange={this.onDayChange} name="day"  type="text"/>
          <input value={this.state.year} onChange={this.onYearChange} name="year" type="text"/>
          <RadioGroup 
            name="month"
            onChange={this.onMonthChange}
            value={this.state.month}
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


