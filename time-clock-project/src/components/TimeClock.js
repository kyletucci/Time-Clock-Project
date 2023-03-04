import React from 'react';
import styled from 'styled-components'
import TimeInput from './TimeInput'
import Buttons from './Buttons'
import Duration from './Duration';

const StyledTimeClock = styled.div`
  background-color: rgba(200,200,200,.5);
  height: 500px;
  width: 400px;
  padding: 50px 0;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
    handleClear
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
        <Duration duration={duration}/>
      </StyledRow>
      <StyledRow>
        <Buttons 
          startTime={startTime}
          handleStartClick={handleStartClick}
          handleStartChange={handleStartChange}
          endTime={endTime}
          handleEndClick={handleEndClick}
          handleClear={handleClear}
        />
      </StyledRow>
    </StyledTimeClock>
  );
};

export default TimeClock;
