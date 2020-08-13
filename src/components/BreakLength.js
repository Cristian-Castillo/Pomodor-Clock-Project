import React from 'react'
import './BreakLengthStyle.css'

const BreakLength = (props) => {
    return (
        <div className ='container-fuild'>
            <div className ='breakLength-box'>
                <h1>Break Length</h1>
                <h1>{props.prop1}</h1>
            </div>
        </div>
    )
}

export default BreakLength;
