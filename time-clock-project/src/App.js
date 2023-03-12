import React, { useState } from 'react';
import './App.css';
import {
  format,
  subDays,
  addDays,
  formatDuration,
  intervalToDuration,
  isMonday,
  isFriday 
} from 'date-fns'
import DateTimeHeader from './components/DateTimeHeader'
import DateInput from './components/DateInput'
import TimeClock from './components/TimeClock'
import Duration from './components/Duration'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [duration, setDuration] = useState("")
  const [timeRemaining, setTimeRemaining] = useState('')

  // useEffect(() => {
  //   const storedStartTime = JSON.parse(localStorage.getItem("START_TIME"))
  //   if (storedStartTime) {
  //     setStartTime(storedStartTime)
  //   }
  //   const storedEndTime = JSON.parse(localStorage.getItem("END_TIME"))
  //   if (storedEndTime) {
  //     setEndTime(storedEndTime)
  //   }
  //   const storedDuration = JSON.parse(localStorage.getItem("DURATION"))
  //   if (storedDuration) {
  //     setDuration(storedDuration)
  //   }

  //   const storedTimeRemaining = JSON.parse(localStorage.getItem("TIME_REMAINING"))
  //   if (storedTimeRemaining) {
  //     setTimeRemaining(storedTimeRemaining)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("START_TIME", JSON.stringify(startTime))
  //   localStorage.setItem("END_TIME", JSON.stringify(endTime))
  //   if(startTime && !endTime){
  //     setDuration(((currentTime - startTime) / 1000 / 60 / 60))
  //     }
  //   localStorage.setItem("DURATION", JSON.stringify(duration))
  //   localStorage.setItem("FULL_WEEK", JSON.stringify(fullWeek))
  //   setFullWeek(startTime + (80 * 60 * 60 * 1000))
  //   if(!endTime){
  //   startTime && setTimeRemaining(fullWeek - currentTime.getTime())
  //   }
  //   localStorage.setItem("TIME_REMAINING", JSON.stringify(timeRemaining))
  //   localStorage.setItem("SELECTED_DATE", JSON.stringify(selectedDate))
  // }, [selectedDate, startTime, endTime, duration, fullWeek, timeRemaining, currentTime])

  function updateTime(newTime){
    setCurrentTime(newTime)
  }

  function handleDateChange(event){
    setSelectedDate(new Date(event.target.value))
    console.log(selectedDate)
    console.log(event.target.value)
  }

  function handleStartClick(){
    setStartTime(format(currentTime, 'hh:mm'))
  }

  function handleStartChange(event){
    setStartTime(event.target.value)
  }

  function handleEndClick() {
    setEndTime(format(currentTime, 'hh:mm'))
  }

  function handleEndChange(event){
    setEndTime(event.target.value)
  }

  function getTimeValue(time){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return (hours + ":" + minutes + ":" + seconds)
  }

  const handleClear = () => {
    setStartTime("")
    setEndTime("")
    setTimeRemaining(40 * 60 * 60 * 1000)
  }

  function handleLeftArrow(){
    let newDay
    if (isMonday(selectedDate)){
      newDay = subDays(selectedDate, 3)
    }
    else {
      newDay = subDays(selectedDate, 1)
    }
    setSelectedDate(newDay)
  }

  function handleRightArrow(){
    let newDay
    if (isFriday(selectedDate)){
      newDay = addDays(selectedDate, 3)
    }
    else {
      newDay = addDays(selectedDate, 1)
    }
    setSelectedDate(newDay)
  }

  function calculateDuration(startTime, endTime){
    return formatDuration(
      intervalToDuration({
        start: startTime,
        end: endTime,
      }),
    { format: ['hours', 'minutes', 'seconds'],})
  }

  return (
    <div className="App">
      <div className='time-clock--container'>
        <DateTimeHeader currentTime={currentTime} updateTime={updateTime} />
        <DateInput selectedDate={format(selectedDate,'yyyy-MM-dd')} handleDateChange={handleDateChange} handleLeftArrow={handleLeftArrow} handleRightArrow={handleRightArrow}  />
        <TimeClock
          startTime={startTime}
          handleStartChange={handleStartChange}
          endTime={endTime}
          handleEndChange={handleEndChange}
          handleLeftArrow={handleLeftArrow}
          handleDateChange={handleDateChange}
          getTimeValue={getTimeValue}
          dayOfWeek={selectedDate}
          currentTime={currentTime}
          handleStartClick={handleStartClick}
          handleEndClick={handleEndClick}
          duration={duration}
          handleClear={handleClear}
          selectedDate={selectedDate}
          />
        <div>Time Remaining: {(timeRemaining / (1000 * 60 * 60)).toFixed(2)} hours</div>
      </div>
    </div>
  );
}

export default App;
