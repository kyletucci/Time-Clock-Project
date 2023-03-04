import React from 'react'
import styled from 'styled-components'

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`

const StyledButton = styled.button`
  width: 115px;
  height: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  color: #282c34;;
`

const StyledClear = styled.button`
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  color: #282c34;;
`

function Buttons({ startTime, handleStartClick, handleStartChange, endTime, handleEndClick, handleClear }) {
  return (
    <StyledButtonContainer>
      <div>
        <StyledButton onClick={handleStartClick} disabled={startTime}>
            Start
        </StyledButton>
        <StyledButton onClick={handleEndClick} disabled={!startTime || endTime}>
            End
        </StyledButton>
      </div>
      <StyledClear onClick={handleClear}>
        Clear
      </StyledClear>
    </StyledButtonContainer>
  )
}

export default Buttons