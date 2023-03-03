import React from 'react';
import styled from 'styled-components'
import TimeInput from './TimeInput'
import Buttons from './Buttons'

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

function TimeClock(
  {
    startTime,
    handleStartChange,
    endTime,
    handleEndChange,
    handleEndClick,
    handleStartClick
  }){
  
  return (
    <StyledTimeClock>
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
