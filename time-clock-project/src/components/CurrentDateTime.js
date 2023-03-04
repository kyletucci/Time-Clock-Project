import React, { useEffect } from 'react'
import { format } from 'date-fns'
import Styled from 'styled-components'

const StyledDateHeader = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
`

function CurrentDateTime({ currentTime, updateTime }) {
    //Set interval for clock to refresh
    useEffect(() => {
        const intervalId = setInterval(() => {
        updateTime(new Date())
        }, 1000);
    return () => clearInterval(intervalId);
    })

  return (
    <StyledDateHeader>
        <h2>{format(new Date(), 'M-d-yyyy')}</h2>
        <h3>{format(currentTime, 'hh:mm:ss aa')}</h3>
    </StyledDateHeader>
  )
}

export default CurrentDateTime