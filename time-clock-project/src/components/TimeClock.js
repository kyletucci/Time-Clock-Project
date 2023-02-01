import React from 'react';

function TimeClock({ currentTime, startTime, endTime, handleStartClick, handleEndClick }){
  
  const dayOfWeek = currentTime
  // Options for dayOfWeek date strings
  const options = { weekday: 'long' }

  let duration = null;
  if (startTime && endTime) {
    duration = ((endTime - startTime) / 1000 / 60 / 60).toFixed(2);
  }

  return (
    <div>
      <div>{dayOfWeek ? dayOfWeek.toLocaleDateString(undefined, options) : 'Not started'}</div>
      <div>Start Time: {startTime ? startTime : 'Not started'}</div>
      <div>End Time: {endTime ? endTime : 'Not ended'}</div>
      <div>Duration: {duration} {duration && `hours`}</div>
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
