import React, { useState } from 'react';
import './App.css';
import TimeClock from './components/TimeClock'
import styled from 'styled-components'
import CurrentDateTime from './components/CurrentDateTime';

const StyledClear = styled.button`
height: 50px;
width: 200px;
`

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date(currentTime).toISOString().split('T')[0])
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [timeRemaining, setTimeRemaining] = useState('')
  const [duration, setDuration] = useState(0)

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

  function handleDateEdit(event){
    setSelectedDate(event.target.value)
  }

  const handleStartClick = () => {
    setStartTime(currentTime.getTime())
  };

  const handleEndClick = () => {
    setEndTime(currentTime.getTime())
    duration && setDuration(endTime - startTime)
  };

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
    selectedDate.setDate(selectedDate.getDate() - 1)
  }

  return (
    <div className="App">
      <div className='time-clock--container'>
        <CurrentDateTime currentTime={currentTime} updateTime={updateTime} />
        <TimeClock
          handleLeftArrow={handleLeftArrow}
          handleDateChange={handleDateEdit}
          getTimeValue={getTimeValue}
          dayOfWeek={selectedDate}
          currentTime={currentTime}
          startTime={startTime}
          endTime={endTime}
          handleStartClick={handleStartClick}
          handleEndClick={handleEndClick}
          />
        <StyledClear onClick={handleClear}>Clear</StyledClear>
        <div>Time Remaining: {(timeRemaining / (1000 * 60 * 60)).toFixed(2)} hours</div>
      </div>
    </div>
  );
}

export default App;
