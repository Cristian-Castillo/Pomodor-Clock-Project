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
                        <div class="col">
                        <h4><span>
                                <button className = 'btn1'>-</button>
                                Session Length
                                <button className = 'btn2'>+</button>
                            </span>
                            <SessionLength prop2 = {'25'}/>
                        </h4>
                        </div>
                        </div>
                        <div className ='row'>
                            <div class="col">
                            <h4><span>
                                    <button className = 'btn3'>-</button>
                                    Break Length
                                    <button className = 'btn4'>+</button>
                                </span>
                                <BreakLength prop1 = {'5'}/>
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
/* Redux State variables to hold data */
const mapStateToProps = state => {
    return{
        ctr:state.counter,
        ctr2:state.counter2,
    }
}

/* Redux dispatching to store action creators */
const mapDispatchToProps = dispatch => {
    return{
        incrementCount:()=> dispatch({type:ActionTypes.ADD}),
        incrementCount2:()=> dispatch({type:ActionTypes.ADD2})
    }
}
/* Connect and map state and dispatch with app component */
export default connect(mapStateToProps,mapDispatchToProps)(Pomodor);
