import React, { useState } from 'react';
import styled from 'styled-components'
import Duration from './Duration'
import Buttons from './Buttons'
import TimeInput from './TimeInput'

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
    startTime,
    handleStartChange,
    endTime,
    handleEndChange,
    handleEndClick,
    handleLeftArrow,
    dayOfWeek,
    handleDateChange,
    handleStartClick
  }){
  
  return (
    <StyledTimeClock>
      <div>
        <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
        <input type='date' onChange={handleDateChange} value={dayOfWeek}></input>
        <StyledArrow href='#'>{'-->'}</StyledArrow>
      </div>
      <StyledRow>
        <div>Start Time: </div>
        <TimeInput time={startTime} onChange={handleStartChange} />
      </StyledRow>
      <StyledRow>
        <div>End Time: </div>
        <TimeInput time={endTime} onChange={handleEndChange} />
      </StyledRow>
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
