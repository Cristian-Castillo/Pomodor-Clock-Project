import React from 'react'
import './SessionLengthStyle.css'

const SessionLength = (props) => {
    return (
        <div className ='container-fuild'>
            <div className ='sessionLength-box'>
                <h1>Session Length</h1>
                <h1>{props.prop2}</h1>
            </div>
        </div>
    )
}

export default SessionLength;
