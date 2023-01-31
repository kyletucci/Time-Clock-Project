import React, { useState, useEffect } from 'react';
import './App.css';
import TimeClock from './components/TimeClock'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  const handleStartClick = () => {
    setStartTime(currentTime)
  };

  const handleEndClick = () => {
    setEndTime(currentTime)
  };

  return (
    <div className="App">
      <div className='time-clock--container'>
        <div className='time-clock--current'>Current Time: {currentTime.toLocaleTimeString()}</div>
        <TimeClock startTime={startTime} endTime={endTime} handleStartClick={handleStartClick} handleEndClick={handleEndClick} currentTime={currentTime}/>
      </div>
    </div>
  );
}

export default App;
