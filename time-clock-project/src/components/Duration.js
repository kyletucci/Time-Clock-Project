import React from 'react'

function Duration({ duration }) {
    return (
        <div>Duration: {duration && `${duration.toFixed(2)} hours`}</div>
    )
}

export default Duration