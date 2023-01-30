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
      <header className="App-header">
      <div>Current Time: {currentTime.toLocaleTimeString()}</div>
        <TimeClock currentTime={currentTime}/>
      </header>
    </div>
  );
}

export default App;
