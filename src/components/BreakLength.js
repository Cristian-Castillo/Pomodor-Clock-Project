import React from 'react'
import './BreakLengthStyle.css'

const BreakLength = (props) => {
    return (
        <div className ='container-fuild'>
            <div>
                <h3>Break Length</h3>
                <h3>{props.prop1}</h3>
            </div>
        </div>
    )
}

export default BreakLength;
