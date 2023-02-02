import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
width: 100px;
height: 50px;
margin: 0 auto;
`
const StyledClear = styled.button`
height: 50px;
width: 200px;
`

function Buttons({ startTime, handleStartClick, endTime, handleEndClick, handleClear }) {
  return (
    <>
        <StyledButton onClick={handleStartClick} disabled={startTime}>
            Start
        </StyledButton>
        <StyledButton onClick={handleEndClick} disabled={!startTime || endTime}>
            End
        </StyledButton>
        <StyledClear onClick={handleClear}>Clear</StyledClear>

    </>
  )
}

export default Buttons