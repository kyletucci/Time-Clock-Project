import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Duration from './Duration'
import Buttons from './Buttons'
import DateSelector from './DateSelector';
import StartTime from './StartTime';

const StyledTimeClock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 300px;
  `

  const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
  `

function TimeClock(){

  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(currentTime).toISOString().split('T')[0])
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [duration, setDuration] = useState(null)
  const [fullWeek, setFullWeek] = useState('')
  const [timeRemaining, setTimeRemaining] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    const storedStartTime = JSON.parse(localStorage.getItem("START_TIME"))
    if (storedStartTime) {
      setStartTime(storedStartTime)
    }
    const storedEndTime = JSON.parse(localStorage.getItem("END_TIME"))
    if (storedEndTime) {
      setEndTime(storedEndTime)
    }
    const storedDuration = JSON.parse(localStorage.getItem("DURATION"))
    if (storedDuration) {
      setDuration(storedDuration)
    }

    const storedTimeRemaining = JSON.parse(localStorage.getItem("TIME_REMAINING"))
    if (storedTimeRemaining) {
      setTimeRemaining(storedTimeRemaining)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("START_TIME", JSON.stringify(startTime))
    localStorage.setItem("END_TIME", JSON.stringify(endTime))
    if(startTime && !endTime){
      setDuration(((currentTime - startTime) / 1000 / 60 / 60))
      }
    localStorage.setItem("DURATION", JSON.stringify(duration))
    localStorage.setItem("FULL_WEEK", JSON.stringify(fullWeek))
    setFullWeek(startTime + (80 * 60 * 60 * 1000))
    if(!endTime){
    startTime && setTimeRemaining(fullWeek - currentTime.getTime())
    }
    localStorage.setItem("TIME_REMAINING", JSON.stringify(timeRemaining))
    localStorage.setItem("SELECTED_DATE", JSON.stringify(selectedDate))
  }, [selectedDate, startTime, endTime, duration, fullWeek, timeRemaining, currentTime])

  function handleDateChange(event){
    setSelectedDate(event.target.value)
  }

  const handleStartClick = () => {
    setStartTime(currentTime.getTime())
    console.log(startTime)
  };

  function handleStartChange(event){
    setStartTime(event.target.value)
  }

  const handleEndClick = () => {
    setEndTime(currentTime.getTime())
  };

  const handleClear = () => {
    setStartTime("")
    setEndTime("")
    setDuration("")
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

  function getFinalTime(){
    let date = new Date(fullWeek)
    return (
      <div>{`${date.toDateString()} ${date.toLocaleTimeString()}`}</div>
    )
  }

  function handleLeftArrow(){
    selectedDate.setDate(selectedDate.getDate() - 1)
  }
  
  if(startTime){
    setStartTime(new Date(startTime))
  }

  if(endTime){
    setEndTime(new Date(endTime).toLocaleTimeString())
  }

  return (
    <StyledTimeClock>
      <div className='time-clock--current'>It is currently {currentTime.toLocaleTimeString()} on {currentTime.toDateString()}</div>
      <DateSelector handleLeftArrow={handleLeftArrow} handleDateChange={handleDateChange}/>
      <StyledRow>
        <StartTime getTimeValue={getTimeValue} handleStartChange={handleStartChange} startTime={startTime} />
      </StyledRow>
      <StyledRow>
        <div>End Time: </div>
        <div>{endTime ? endTime : 'Not ended'}</div>
      </StyledRow>
      <Duration duration={duration} />
      <StyledRow>
        <Buttons 
          startTime={startTime}
          handleStartClick={handleStartClick}
          handleStartChange={handleStartChange}
          endTime={endTime}
          handleEndClick={handleEndClick}
          handleClear={handleClear}
        />
      </StyledRow>
      <div>Time Remaining: {(timeRemaining / (1000 * 60 * 60)).toFixed(2)} hours</div>
      {startTime && getFinalTime()}
    </StyledTimeClock>
  );
};

export default TimeClock;
