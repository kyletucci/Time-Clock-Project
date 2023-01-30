import React, { useState } from 'react';

const TimeClock = ({ currentTime }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleStartClick = () => {
    setStartTime(currentTime);
  };

  const handleEndClick = () => {
    setEndTime(currentTime);
  };

  let duration = null;
  if (startTime && endTime) {
    duration = (endTime - startTime) / 1000 / 60;
  }

  return (
    <div>
      <div>Start Time: {startTime ? startTime.toLocaleTimeString() : 'Not started'}</div>
      <div>End Time: {endTime ? endTime.toLocaleTimeString() : 'Not ended'}</div>
      <div>Duration: {duration} minutes</div>
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
