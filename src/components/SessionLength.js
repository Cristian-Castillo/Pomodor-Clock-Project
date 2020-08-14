import React from 'react'
import './SessionLengthStyle.css'

const SessionLength = (props) => {
    return (
        <div className ='container-fuild'>
            <div>
                <h3>Session Length</h3>
                <h3>{props.prop2}</h3>
            </div>
        </div>
    )
}

export default SessionLength;
