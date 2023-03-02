import React from 'react'

function StartTime({ time, onChange }){

    return (
      <input 
       type="time"
       onChange={onChange}
       value={time && time}
       />
    )
}

export default StartTime