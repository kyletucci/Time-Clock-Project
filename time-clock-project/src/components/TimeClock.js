import React from 'react';
import styled from 'styled-components'
import TimeInput from './TimeInput'
import Buttons from './Buttons'
import Duration from './Duration';
import CurrentTimeSlot from './CurrentTimeSlot';

const StyledTimeClock = styled.div`
  background-color: rgba(200,200,200,.5);
  width: 80%;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  font-size: 20px;
  color: white;

  border-radius: 50px;
  `

const StyledRow = styled.div`
width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
