import styled from 'styled-components'
import React from 'react'

const StyledArrow = styled.a`
color: white;
text-decoration: none;
font-weight: bolder;
`

function DateInput({ selectedDate, handleDateChange }) {
  return (
    <>   
    <StyledArrow href='#'>{'<--'}</StyledArrow>
    <input type='date' onChange={handleDateChange} value={selectedDate}></input>
    <StyledArrow href='#'>{'-->'}</StyledArrow>
    </>
  )
}

export default DateInput
