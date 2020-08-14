import React, { Component } from 'react'

import BreakLength from './BreakLength'
import SessionLength from './SessionLength'
import SessionTimeDisplay from './SessionTimeDisplay'

import * as ActionTypes from  '../store/reducer/ActionTypes'
import {connect} from 'react-redux'

import './PomodorStyle.css'

class Pomodor extends Component {

    render() {
        return (
            <div className ='App-header'>
                    {/* Container with child components to display rendered props from state redux */}
                    <div className ='container-fluid'>
                        <div className ='row'>
                            <h1 className = 'pomodorTitle'>Pomodor Clock</h1>
                        </div>
                        <div className = 'row'>
                            <div className = "col">
                                <h4><span>
                                        <button onClick = {this.props.subSessionCount} className = 'btn1'>-</button>
                                        Session Length
                                        <button onClick = {this.props.addSessionCount} className = 'btn2'>+</button>
                                    </span>
                                    <SessionLength prop2 = {this.props.ctr}/>
                                </h4>
                            </div>
                        </div>
                        <div className ='row'>
                            <div className = "col">
                                <h4><span>
                                        <button onClick = {this.props.decrementCount} className='btn3'>-</button>
                                        Break Length
                                        <button onClick = {this.props.incrementCount} className='btn4'>+</button>
                                    </span>
                                    <BreakLength prop1 = {this.props.ctr2}/>
                                </h4>
                            </div>
                        </div>
                        <div style= {{marginTop:'30px'}} className = 'row'>
                            <SessionTimeDisplay prop3 = '25 : 00'/>
                            <div style = {{margin:'auto'}}>
                                <h3 className ='playStyle'>Play</h3>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
/* 
Redux State variables to hold data, plus accessing
from a higher nested global level due to combine reducers
*/
const mapStateToProps = state => {
    return{
        ctr:state.reSession.countSession,
        ctr2:state.reBreak.countBreak,
    }
}

/* Redux dispatching to store action creators */
const mapDispatchToProps = dispatch => {
    return{
        addSessionCount:()=> dispatch({type:ActionTypes.ADD}),
        subSessionCount:()=> dispatch({type:ActionTypes.SUBTRACT}),
        incrementCount:()=> dispatch({type:ActionTypes.INCREMENT}),
        decrementCount:()=> dispatch({type:ActionTypes.DECREMENT})
    }
}
/* Connect and map state and dispatch with app component */
export default connect(mapStateToProps,mapDispatchToProps)(Pomodor);
