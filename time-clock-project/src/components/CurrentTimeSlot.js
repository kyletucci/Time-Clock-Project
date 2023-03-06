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
    justify-content: space-around;
    align-items: center;
`

const StyledTimeInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


function CurrentTimeSlot({ currentTime, selectedDate }) {
    const dayOfWeek = getDay(selectedDate)
    const dayInitials = ['S','M','T','W','Th','F','Sa']
    const workWeek = startOfWeek(selectedDate)
    const daysOfCurrentWeek = []
    for(let i = 0; i < 5; i++){
        daysOfCurrentWeek.push(addDays(workWeek, i+1))
    }
    const totalHtml = daysOfCurrentWeek.map((day, i) => 
        <StyledUnselected>
            <div>{dayInitials[i+1]}</div>
            <div>{format(day, 'M/dd')}</div>
            <StyledTimeInput>
                <p>Start Time:</p>
                <TimeInput />
            </StyledTimeInput>
            <StyledTimeInput>
                <p>End Time:</p>
                <TimeInput />
            </StyledTimeInput>
            <div>Total: </div>
        </StyledUnselected>
        )
  return (
    <>
        {totalHtml}
    </>
  )
}

export default CurrentTimeSlot