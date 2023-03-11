import React from 'react'
import { format, getDay, startOfWeek, addDays, add } from 'date-fns'
import styled from 'styled-components'
import TimeInput from './TimeInput'

const StyledSelected = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledUnselected = styled.div`
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


function CurrentTimeSlot({ currentTime, selectedDate }) {
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
            <StyledUnselected key={dayOfWeek} dayOfWeek={dayOfWeek} dayOfSelected={dayOfSelected}>
                <div style={{color: 'inherit'}}>{dayInitials[i+1]}</div>
                <div style={{color: 'inherit'}}>{format(day, 'MM/dd')}</div>
                <StyledTimeInput>
                    <StyledInputLabel>Start Time:</StyledInputLabel>
                    <TimeInput />
                </StyledTimeInput>
                <StyledTimeInput>
                    <StyledInputLabel>End Time:</StyledInputLabel>
                    <TimeInput />
                </StyledTimeInput>
                <div>Total: 8hrs</div>
            </StyledUnselected>
            )})
  return (
    <div style={{color: 'inherit'}}>
        {totalHtml}
    </div>
  )
}

export default CurrentTimeSlot