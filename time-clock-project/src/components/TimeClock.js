import React from 'react';
import styled from 'styled-components'
import Duration from './Duration'
import Buttons from './Buttons'
import { ButtonBase } from '@mui/material';

const StyledTimeClock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 300px;
  `

  const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const StyledArrow = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bolder;
  `

function TimeClock(
  {
    handleLeftArrow,
    dayOfWeek,
    handleDateChange,
    startTime,
    handleStartClick,
    handleStartChange,
    endTime,
    handleEndClick,
    getTimeValue,
    currentTime,
    duration,
  }){
  
  if(startTime){
    startTime = new Date(startTime)
  }

  if(endTime){
    endTime = new Date(endTime).toLocaleTimeString()
  }

  return (
    <StyledTimeClock>
      <div>
        <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
        <input type='date' onChange={handleDateChange} value={dayOfWeek}></input>
        <StyledArrow href='#'>{'-->'}</StyledArrow>
      </div>
      <StyledRow>
        <div>Start Time: </div>
        <div>{<input type="time" onChange={handleStartChange} value={startTime && getTimeValue(startTime)}></input>}</div>
      </StyledRow>
      <StyledRow>
        <div>End Time: </div>
        <div>{endTime ? endTime : 'Not ended'}</div>
      </StyledRow>
      <Duration duration={duration} />
      <StyledRow>
        <Buttons 
          startTime={startTime}
          handleStartClick={handleStartClick}
          handleStartChange={handleStartChange}
          endTime={endTime}
          handleEndClick={handleEndClick}
        />
      </StyledRow>
    </StyledTimeClock>
  );
};

export default TimeClock;
