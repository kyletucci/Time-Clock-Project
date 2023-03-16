import React from 'react'
import { format } from 'date-fns'
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


function TimeSlot({   
        startTime,
        endTime,
        handleStartChange,
        handleEndChange,
        dayOfWeek,
        day,
        dayInitial ,
        dayOfSelected,
    }) {
    return(
        <StyledTimeSlot>
            <div>{dayInitial}</div>
            <div>{format(day, 'MM/dd')}</div>
            <StyledTimeInput>
                <StyledInputLabel>Start Time:</StyledInputLabel>
                <TimeInput time={startTime} onChange={handleStartChange}/>
            </StyledTimeInput>
            <StyledTimeInput>
                <StyledInputLabel>End Time:</StyledInputLabel>
                <TimeInput time={endTime} onChange={handleEndChange}/>
            </StyledTimeInput>
            <div>Total: </div>
        </StyledTimeSlot>
    )
}

export default TimeSlot