import React from 'react'
import styled from 'styled-components'

const StyledArrow = styled.a`
color: white;
text-decoration: none;
font-weight: bolder;
`

function DateSelector({ handleLeftArrow, handleDateChange }) {
  return (
    <div>
        <StyledArrow onClick={handleLeftArrow} href='#'>{'<--'}</StyledArrow>
        <input type='date' onChange={handleDateChange} value={""}></input>
        <StyledArrow href='#'>{'-->'}</StyledArrow>
    </div>
  )
}

export default DateSelector