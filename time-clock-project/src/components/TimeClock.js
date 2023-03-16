import React from 'react';
import styled from 'styled-components'
import { getDay, startOfWeek, addDays } from 'date-fns'
// import Buttons from './Buttons'
// import Duration from './Duration';
import TimeSlot from './TimeSlot';

const StyledTimeClock = styled.div`
  background-color: rgba(200,200,200,.5);
  width: 80%;
  max-width: 600px;
  font-size: 20px;
  color: white;
  `

function TimeClock({
    startTime,
    handleStartChange,
    endTime,
    handleEndChange,
    // handleEndClick,
    // handleStartClick,
    // duration,
    // handleClear,
    currentTime,
    selectedDate
  }){

    const weekdayInitials = ['M','T','W','Th','F','Sa', 'S']
    const calendarWeek = startOfWeek(selectedDate)
    const workWeek = []

    for(let i = 0; i < 5; i++){
      workWeek.push(addDays(calendarWeek, i+1))
    }
    const dateSelected=getDay(selectedDate)
    const timeSlotHtml = workWeek.map((day, i) => {
        return (
        <TimeSlot
          key={i}
          selectedDate={selectedDate}
          currentTime={currentTime}
          startTime={startTime}
          handleStartChange={handleStartChange}
          endTime={endTime}
          handleEndChange={handleEndChange}
          dayOfSelected={dateSelected}
          dayInitial={weekdayInitials[i]}
          dayOfWeek={getDay(day)}
          day={day}
          />
        )
    })
  return (
    <StyledTimeClock>
      {timeSlotHtml}
    </StyledTimeClock>
  );
}

export default TimeClock
