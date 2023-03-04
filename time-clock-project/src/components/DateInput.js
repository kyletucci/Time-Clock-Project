import styled from 'styled-components'
import React from 'react'

const StyledArrow = styled.a`
color: white;
text-decoration: none;
font-weight: bolder;
`

function DateInput({ selectedDate, handleDateChange, handleLeftArrow, handleRightArrow }) {
  return (
    <>   
    <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
    <input type='date' onChange={handleDateChange} value={selectedDate}></input>
    <StyledArrow onClick={handleRightArrow} href='#'>{'-->'}</StyledArrow>
    </>
  )
}

export default DateInput
