import React from 'react';
import styled from 'styled-components'
import TimeInput from './TimeInput'
import Buttons from './Buttons'
import Duration from './Duration';
import TimeSlot from './TimeSlot';

const StyledTimeClock = styled.div`
  background-color: rgba(200,200,200,.5);
  width: 80%;
  max-width: 600px;
  font-size: 20px;
  color: white;
  `

function TimeClock(
  {
    startTime,
    handleStartChange,
    endTime,
    handleEndChange,
    handleEndClick,
    handleStartClick,
    duration,
    handleClear,
    currentTime,
    selectedDate
  }){
  
  return (
    <StyledTimeClock>
      <TimeSlot
        selectedDate={selectedDate}
        currentTime={currentTime}
        startTime={startTime}
        handleStartChange={handleStartChange}
        endTime={endTime}
        handleEndChange={handleEndChange}/>
    </StyledTimeClock>
  );
};

export default TimeClock;
