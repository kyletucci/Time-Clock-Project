import React, { useEffect } from 'react'

function CurrentDateTime({ currentTime, updateTime }) {
    //Set interval for clock to refresh
    useEffect(() => {
        const intervalId = setInterval(() => {
        updateTime(new Date());
        }, 1000);
    return () => clearInterval(intervalId);
    })

  return (
    <div>
        <h2>{currentTime.toDateString()}</h2>
        <h3>{currentTime.toLocaleTimeString()}</h3>
    </div>
  )
}

export default CurrentDateTime