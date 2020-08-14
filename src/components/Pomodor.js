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
                            <div className ='row'>
                                <div className ='col'>
                                    <button>-</button>
                                </div>
                                <div className ='col'>
                                    <h4 style={{fontSize:'2rem'}}>Break Length</h4>
                                </div>
                                <div className ='col'>
                                    <button>+</button>
                                </div>

                                <div className ='col'>
                                    <button>-</button>
                                </div>
                                <div className ='col'>
                                    <h4 style={{fontSize:'2rem'}}>Session Length</h4>
                                </div>
                                <div className ='col'>
                                    <button>+</button>
                                </div>
                            </div>
                        <div style= {{marginTop:'30px'}} className = 'row'>
                            <SessionTimeDisplay prop3 = '25 : 00'/>
                            <div style = {{margin:'auto'}}>
                                <h3 className ='playStyle'>Play</h3>
                            </div>
                        </div>
                    </div>
             {/* <BreakLength prop1 = {'4'}/>   */}
        
{/*                     
                            <div className = 'col-6'>
                                <button>+</button>
                                    <h4 style={{fontSize:'2.2rem'}}>Session Length</h4>
                                <button>-</button>
                                <SessionLength prop2 = {'25'} />
                            </div> */}
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
