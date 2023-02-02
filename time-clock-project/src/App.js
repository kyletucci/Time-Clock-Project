import React from 'react';
import './App.css';
import TimeClock from './components/TimeClock'

function App() {

  return (
    <div className="App">
      <div className='time-clock--container'>
        <TimeClock />
      </div>
    </div>
  );
}

export default App;
