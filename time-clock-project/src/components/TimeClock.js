import React, { useState } from 'react';

const TimeClock = ({ currentTime }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(currentTime)
  const options = { weekday: 'long', month: 'numeric', day: 'numeric' }

  const handleStartClick = () => {
    setStartTime(currentTime);
  };

  const handleEndClick = () => {
    setEndTime(currentTime);
  };

  let duration = null;
  if (startTime && endTime) {
    duration = ((endTime - startTime) / 1000 / 60 / 60).toFixed(2);
  }

  return (
    <div>
      <div>{dayOfWeek ? dayOfWeek.toLocaleDateString(undefined, options) : 'Not started'}</div>
      <div>Start Time: {startTime ? startTime.toLocaleTimeString() : 'Not started'}</div>
      <div>End Time: {endTime ? endTime.toLocaleTimeString() : 'Not ended'}</div>
      <div>Duration: {duration} hours</div>
      <button onClick={handleStartClick} disabled={startTime}>
        Start
      </button>
      <button onClick={handleEndClick} disabled={!startTime || endTime}>
        End
      </button>
    </div>
  );
};

export default TimeClock;
