import React from 'react';

function TimeClock({ dayOfWeek, currentTime, startTime, endTime, duration, handleStartClick, handleEndClick }){

  if(startTime){
    startTime = new Date(startTime).toLocaleTimeString()
  }

  if(endTime){
    endTime = new Date(endTime).toLocaleTimeString()
  }

  return (
    <div>
      <div>{dayOfWeek && dayOfWeek}</div>
      <div>Start Time: {startTime ? startTime : 'Not started'}</div>
      <div>End Time: {endTime ? endTime : 'Not ended'}</div>
      <div>Duration: {duration && `${duration.toFixed(2)} hours`}</div>
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
