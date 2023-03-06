import styled from 'styled-components'
import React from 'react'

const StyledArrow = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bolder;
`

const StyledDateInput = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
`

function DateInput({ selectedDate, handleDateChange, handleLeftArrow, handleRightArrow }) {
  return (
    <StyledDateInput>
        <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
        <input style={{color: 'black'}} type='date' onChange={handleDateChange} value={selectedDate} />
        <StyledArrow onClick={handleRightArrow} href='#'>{'-->'}</StyledArrow>
    </StyledDateInput>
  )
}

export default DateInput
