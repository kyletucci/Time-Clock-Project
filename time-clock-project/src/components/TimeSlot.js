import React from 'react'
import { format, getDay, startOfWeek, addDays } from 'date-fns'
import styled from 'styled-components'
import TimeInput from './TimeInput'

// const StyledSelected = styled.div`
//     display: flex;
//     justify-content: space-between;
// `

const StyledTimeSlot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ dayOfWeek, dayOfSelected }) => dayOfWeek === dayOfSelected ? 'black' : 'none'};
    color: ${({ dayOfWeek, dayOfSelected }) => dayOfWeek === dayOfSelected ? 'white' : 'black'};
    height: 100px;
    width: 100%;
    padding: 0 30px;
`

const StyledTimeInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledInputLabel = styled.p`
    color: ${({ dayOfWeek, dayOfSelected }) => dayOfWeek === dayOfSelected ? 'white' : 'black'};
    margin-bottom: 10px
`


function CurrentTimeSlot(
    {   currentTime,
        selectedDate,
        startTime,
        endTime,
        handleStartChange,
        handleEndChange 
    }) {
    const dayInitials = ['S','M','T','W','Th','F','Sa', 'S']
    const workWeek = startOfWeek(selectedDate)
    const daysOfCurrentWeek = []
    for(let i = 0; i < 5; i++){
        daysOfCurrentWeek.push(addDays(workWeek, i+1))
    }
    const totalHtml = daysOfCurrentWeek.map((day, i) => {
        const dayOfWeek = getDay(day)
        const dayOfSelected = getDay(selectedDate)
        return(
            <StyledTimeSlot key={dayOfWeek} dayOfWeek={dayOfWeek} dayOfSelected={dayOfSelected}>
                <div style={{color: 'inherit'}}>{dayInitials[i+1]}</div>
                <div style={{color: 'inherit'}}>{format(day, 'MM/dd')}</div>
                <StyledTimeInput>
                    <StyledInputLabel>Start Time:</StyledInputLabel>
                    <TimeInput key={day} time={startTime} onChange={handleStartChange}/>
                </StyledTimeInput>
                <StyledTimeInput>
                    <StyledInputLabel>End Time:</StyledInputLabel>
                    <TimeInput key={day+1} time={endTime} onChange={handleEndChange}/>
                </StyledTimeInput>
                <div>Total: {endTime - startTime}</div>
            </StyledTimeSlot>
            )})
  return (
    <div style={{color: 'inherit'}}>
        {totalHtml}
    </div>
  )
}

export default CurrentTimeSlot