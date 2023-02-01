import React from 'react';
import styled from 'styled-components'

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
  const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    margin: 0 auto;
  `

function TimeClock({ dayOfWeek, currentTime, startTime, endTime, duration, handleStartClick, handleEndClick }){

  if(startTime){
    startTime = new Date(startTime).toLocaleTimeString()
  }

  if(endTime){
    endTime = new Date(endTime).toLocaleTimeString()
  }

  return (
    <StyledTimeClock>
      <div>{dayOfWeek && dayOfWeek}</div>
      <StyledRow>
        <div>Start Time: </div>
        <div>{startTime ? startTime : 'Not started'}</div>
      </StyledRow>
      <StyledRow>
        <div>End Time: </div>
        <div>{endTime ? endTime : 'Not ended'}</div>
      </StyledRow>
      <div>Duration: {duration && `${duration.toFixed(2)} hours`}</div>
      <StyledRow>
        <StyledButton onClick={handleStartClick} disabled={startTime}>
          Start
        </StyledButton>
        <StyledButton onClick={handleEndClick} disabled={!startTime || endTime}>
          End
        </StyledButton>
      </StyledRow>
    </StyledTimeClock>
  );
};

export default TimeClock;
