import React, { useState, useEffect } from 'react';
import './App.css';
import TimeClock from './components/TimeClock'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

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
    setFullWeek(startTime + (40 * 60 * 60 * 1000))
    if(!endTime){
    startTime && setTimeRemaining(fullWeek - currentTime.getTime())
    }
    localStorage.setItem("TIME_REMAINING", JSON.stringify(timeRemaining))
  }, [startTime, endTime, duration, fullWeek, timeRemaining, currentTime])

  const handleStartClick = () => {
    setStartTime(currentTime.getTime())
  };

  const handleEndClick = () => {
    setEndTime(currentTime.getTime())
  };

  function getFinalTime(){
    let date = new Date(fullWeek)
    return (
      <div>{`${date.toDateString()} ${date.toLocaleTimeString()}`}</div>
    )
  }

  const handleClear = () => {
    setStartTime("")
    setEndTime("")
    setTimeRemaining(40 * 60 * 60 * 1000)
  }

  return (
    <div className="App">
      <div className='time-clock--container'>
        <div className='time-clock--current'>Current Time: {currentTime.toLocaleTimeString()}</div>
        <TimeClock dayOfWeek='Monday' currentTime={currentTime} startTime={startTime} endTime={endTime} duration={duration} handleStartClick={handleStartClick} handleEndClick={handleEndClick}/>
        <button onClick={handleClear}>Clear</button>
        <div>Time Remaining: {(timeRemaining / (1000 * 60 * 60)).toFixed(2)} hours</div>
        {startTime && getFinalTime()}
      </div>
    </div>
  );
}

export default App;
