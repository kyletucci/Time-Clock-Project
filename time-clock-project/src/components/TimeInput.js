import React from 'react'
import Styled from 'styled-components'

const StyledTimeInput = Styled.input`
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #282c34;
`


function StartTime({ time, onChange }){

    return (
      <StyledTimeInput 
       type="time"
       onChange={onChange}
       value={time && time}
       
       />
    )
}

export default StartTime