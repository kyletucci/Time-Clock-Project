import React from 'react'

function StartTime({ getTimeValue, handleStartChange, startTime}) {
  return (
    <>
    <div>Start Time: </div>
    <div>
        {<input
        type="time"
        onChange={handleStartChange}
        value={startTime && getTimeValue(startTime)}>
        </input>}
    </div>
    </>
  )
}

export default StartTime