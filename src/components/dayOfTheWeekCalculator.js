import React from 'react'
import RadioGroup from './RadioGroup'
import RadioOption from './RadioOption'

export default class DayOfTheWeekCalculator extends React.Component {

  constructor(props) {
    super(props)
    /**
    * An object containing all the months. Every month is an object with:
    * name (string of the English name),
    * numberOfDays (number of days for that month in a non-leap year)
    * monthCode (code of the month used in the formula for calculating the day of the week)
    */
    this.MONTHS = {
      1: {
        name: 'January',
        numberOfDays: 31,
        monthCode: 1
      },

      2: {
        name: 'February',
        numberOfDays: 28,
        monthCode: 4
      },

      3: {
        name: 'March',
        numberOfDays: 31,
        monthCode: 4
      },

      4: {
        name: 'April',
        numberOfDays: 30,
        monthCode: 0
      },

      5: {
        name: 'May',
        numberOfDays: 31,
        monthCode: 2
      },

      6: {
        name: 'June',
        numberOfDays: 30,
        monthCode: 5
      },

      7: {
        name: 'July',
        numberOfDays: 31,
        monthCode: 0
      },

      8: {
        name: 'August',
        numberOfDays: 31,
        monthCode: 3
      },

      9: {
        name: 'September',
        numberOfDays: 30,
        monthCode: 6
      },

      10: {
        name: 'October',
        numberOfDays: 31,
        monthCode: 1
      },

      11: {
        name: 'November',
        numberOfDays: 30,
        monthCode: 4
      },

      12: {
        name: 'December',
        numberOfDays: 31,
        monthCode: 6
      }
    }
    /**  
    * CENTURY_CODES are used to calculate the yearCode for each year in the 
    * formula.The first value of the array is for when there is a leap year 
    * every 400 years(usually every 100 years there is no leap year).
    * That is, ... 1200, 1600, 2000 ... centuries have the century code 6.
    * Then the other centurycodes follow: 1700: 4, 1800: 2, 1900: 0, 
    * again it loops at 2000
    */
    this.CENTURY_CODES = [6, 4, 2, 0]

    /**
     * In the formula, result 0 means Saturday, 1 Sunday, ... 6 Friday,
     * so the days have to be in this order in the array.
     */
    this.DAYS_OF_THE_WEEK = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    this.state = {
      // Currently selected date
      day: '',
      month: '3',
      year: '',

      // Values used for the formula
      yearCode: undefined,
      centuryCode: undefined,
      monthCode: undefined,
      isLeapYear: false,

      // Result
      dayOfTheWeek: '',
      error: '',
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    // Whenever any part of the date is changed, the day number has to be checked, so it does not exceed the maximum number of days in the month.
    // Also the year and century code states are updated to match the selection.
    if (prevState.month !== this.state.month || prevState.year !== this.state.year || prevState.day !== this.state.day) {
      this.checkAndUpdateDay()
      this.updateDayOfTheWeek()
    }
  }

  updateDayOfTheWeek = () => {
    // dayIndex represents the day of the week, where 
    // Sunday: 1, Monday: 2, ... Friday: 6, Saturday: 0
    let dayIndex = (this.state.yearCode + this.state.monthCode + +this.state.day) % 7

    // For January and February of leap years, we have to subtract 1.
    if (this.state.isLeapYear && (+this.state.month === 1 || +this.state.month === 2)) {
      if (dayIndex === 0) {
        dayIndex = 6 // From Saturday to Friday
      } else {
        dayIndex-- // Other days
      }
    }
    this.setState(() => ({
      dayOfTheWeek: this.DAYS_OF_THE_WEEK[dayIndex]
    }))
  }


  /**
   * Checks that the current day number is within the number of days of the 
   * current month. If not, updates the day number to the last day of the month.
   * @memberof DayOfTheWeekCalculator
   */
  checkAndUpdateDay = () => {
    // Highest possible date number for the selected month.
    // let maxDayForMonth = MAX_DAY_FOR_MONTH[+this.state.month]
    let maxDayForMonth = this.MONTHS[+this.state.month].numberOfDays
    // If leap year and february, 28 --> 29
    if (this.state.isLeapYear && +this.state.month === 2) {
      maxDayForMonth++
    }

    // If state has higher date than the max possible, set the day to the max 
    // value.
    if (+this.state.day > maxDayForMonth) {
      this.setState(() => ({
        day: `${maxDayForMonth}`
      }))
    }
    
  }

  onDayChange = (e) => {
    const day = e.target.value.trim()

    // Allow empty field
    if (day.length === 0) {
      this.setState(() => ({
        day: ''
      }))
      return
    }
    // Get the integer value of the input. NaN if invalid value.
    let dayInt = Math.trunc(+day)

    // TODO: DRY code... same logic repeated in checkAndUpdateDay()
    // Highest possible date number for the selected month.
    let maxDayForMonth = this.MONTHS[+this.state.month].numberOfDays
    // If leap year and february, 28 --> 29
    if (this.state.isLeapYear && +this.state.month === 2) {
      maxDayForMonth++
    }

    // Only allow numbers between 1 and max.
    if (isNaN(dayInt) || dayInt < 1 || dayInt > maxDayForMonth) {
      return
    }

    this.setState(() => ({
      day: `${dayInt}`
    }))
  }

  /**
   * Validates the input value, and changes the year and isLeapYear in 
   * the component state accordingly. 
   * @memberof DayOfTheWeekCalculator
   */
  onYearChange = (e) => {
    // Get the integer value of the input. NaN if invalid value.
    // Easier to check if valid with integer value.
    const yearInt = Math.trunc(+e.target.value.trim())
    let isLeapYear = false;

    // Only allow numbers between 0 and max.
    if (isNaN(yearInt)
        || yearInt < 0 
        || yearInt > this.props.maxYear)
    {
      return
    }
    
    // Every fourth year is a leap year, except every 100 years. But then every 400 years is a leap year anyway.
    isLeapYear = (yearInt % 400 === 0 || (yearInt % 4 === 0 && yearInt % 100 !== 0))

    // Century code used in the formula for calculating the yearCode below.
    const { yearCode, centuryCode } = this.calculateYearAndCenturyCode(yearInt)

    this.setState(() => ({
      year: `${yearInt}`,
      isLeapYear,
      yearCode,
      centuryCode
    }))
  }

  calculateYearAndCenturyCode = (year) => {
    // Gets the century by removing the last two numbers of the year.
    const century = Math.trunc(year / 100)

    // Looks like the formula (arrIndex % arr.length + arrLength) % arrLength as the index of an array gets the array value for both positive and negative arrIndex values, going on infinitely. That is, arrIndex = -1 gets arr[length - 1], and arrIndex = arr.length gets arr[0]
    // This way it is possible to get the century code for any century (or at least for years  0 - 9999, haven't thought about other years) just by looping the centuryCodes array backwards or forwards.  
    // Explanation for the meaning & purpose of the century code in the comments for the century codes array in the constructor.
    const centuryCode = this.CENTURY_CODES[((century) % this.CENTURY_CODES.length + this.CENTURY_CODES.length) % this.CENTURY_CODES.length]

    const lastTwoNumbers = year - century * 100
    // yearcode == (centuryCode + lastTwoDigitsOfYear + (lastTwoDigitsOfYear div 4)) mod 7
    // For example yearCode for 1992:
    // (0 + 92 + (92 div 4)) mod 7
    // = (92 + 23) mod 7 = 115 mod 7 = (7 * 16 + 3) mod 7 
    // = 3 
    const yearCode = (centuryCode + lastTwoNumbers + (Math.trunc(lastTwoNumbers / 4))) % 7

    return {yearCode, centuryCode}
  }

  /**
   *
   * Updates the month and monthCode values in the state based on selection.
   * @memberof DayOfTheWeekCalculator
   */
  onMonthChange = (e) => {
    const month = e.target.value
    // In current setup, this should never happen
    if (month < 1 || month > 12) {
      this.setState(() => ({
        error: `Invalid month value: ${month}.`
      }))
      return
    }

    const monthCode = this.MONTHS[month].monthCode 
    this.setState(() => ({
      month,
      monthCode
    }))
  }

  render() {
    return (
      <div>
        <h1>The selected date is {this.state.day} {this.MONTHS[this.state.month].name} {this.state.year}. Leap year? {this.state.isLeapYear.toString()}</h1>
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
        <h1>Day of the week: {this.state.dayOfTheWeek}</h1>
      </div>
    )
  }
}

DayOfTheWeekCalculator.defaultProps = {
  maxYear: 3000,
}


