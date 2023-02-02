import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
width: 100px;
height: 50px;
margin: 0 auto;
`

function Buttons({ startTime, handleStartClick, handleStartChange, endTime, handleEndClick }) {
  return (
    <>
        <StyledButton onClick={handleStartClick} disabled={startTime}>
            Start
        </StyledButton>
        <StyledButton onClick={handleEndClick} disabled={!startTime || endTime}>
            End
        </StyledButton>
    </>
  )
}

export default Buttons