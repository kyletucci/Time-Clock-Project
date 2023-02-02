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

  const StyledArrow = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bolder;
  `

function TimeClock({ dayOfWeek, currentTime, startTime, endTime, duration, handleStartClick, handleEndClick }){

  if(startTime){
    startTime = new Date(startTime)
  }

  if(endTime){
    endTime = new Date(endTime).toLocaleTimeString()
  }

  function getTimeValue(){
    let hours = startTime.getHours();
    let minutes = startTime.getMinutes();
    let seconds = startTime.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return (hours + ":" + minutes + ":" + seconds)
  }

  return (
    <StyledTimeClock>
      <div><StyledArrow href='#'>{'<--'}</StyledArrow> {dayOfWeek && dayOfWeek} <StyledArrow href='#'>{'-->'}</StyledArrow></div>
      <StyledRow>
        <div>Start Time: </div>
        <div>{startTime ? startTime.toLocaleTimeString() : 'Not started'}</div>
      </StyledRow>
      <input type="time" value={getTimeValue()}></input>
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
