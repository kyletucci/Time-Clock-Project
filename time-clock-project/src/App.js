import React, { useState, useEffect} from 'react';
import './App.css';
import TimeClock from './components/TimeClock'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <div className='time-clock--container'>
        <div className='time-clock--current'>Current Time: {currentTime.toLocaleTimeString()}</div>
        <TimeClock currentTime={currentTime}/>
      </div>
    </div>
  );
}

export default App;
