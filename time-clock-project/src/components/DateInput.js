import styled from 'styled-components'
import React from 'react'

const StyledArrow = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bolder;
`

const StyledDateInput = styled.input`
    color: #282c34;
`

function DateInput({ selectedDate, handleDateChange, handleLeftArrow, handleRightArrow }) {
  return (
    <>
        <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
        <StyledDateInput type='date' onChange={handleDateChange} value={selectedDate} />
        <StyledArrow onClick={handleRightArrow} href='#'>{'-->'}</StyledArrow>
    </>
  )
}

export default DateInput
