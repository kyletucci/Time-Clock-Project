import React, { useEffect } from 'react'
import { format } from 'date-fns'

function CurrentDateTime({ currentTime, updateTime }) {
    //Set interval for clock to refresh
    useEffect(() => {
        const intervalId = setInterval(() => {
        updateTime(new Date())
        }, 1000);
    return () => clearInterval(intervalId);
    })

  return (
    <div>
        <h2>{format(new Date(), 'M-d-yyyy')}</h2>
        <h3>{format(currentTime, 'hh:mm:ss aa')}</h3>
    </div>
  )
}

export default CurrentDateTime