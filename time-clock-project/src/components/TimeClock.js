import React from 'react';
import styled from 'styled-components'
import TimeInput from './TimeInput'
import Buttons from './Buttons'
import Duration from './Duration';
import CurrentTimeSlot from './CurrentTimeSlot';

const StyledTimeClock = styled.div`
  background-color: rgba(200,200,200,.5);
  width: 80%;
  max-width: 600px;
  /* padding: 10px 50px; */
  font-size: 20px;
  color: white;
  border-radius: 50px;
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
      <CurrentTimeSlot selectedDate={selectedDate} currentTime={currentTime} />
    </StyledTimeClock>
  );
};

export default TimeClock;
