import React from 'react'
import './SessionTimeStyle.css'

const SessionTimeDisplay = (props) => {
    return (
        <div className = 'container-fluid'>
            <div className = 'session-layout'>
                <h1 className ='fontSesh'>Session</h1>
                <h1 className ='fontSesh'>{props.prop3}</h1>
            </div>
        </div>
    )
}

export default SessionTimeDisplay;