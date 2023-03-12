import React from 'react'
import Styled from 'styled-components'

const StyledTimeInput = Styled.input`
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #282c34;
`


function TimeInput({ time, onChange }){

    return (
      <StyledTimeInput 
       type="time"
       key={time}
       onChange={onChange}
       value={time && time}
      />
    )
}

export default TimeInput