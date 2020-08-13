import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from  '../store/reducer/ActionTypes'
import './PomodorStyle.css'

class Pomodor extends Component {

    render() {
        return (
            <div className ='container fluid'>
                <h1 className = 'pomodorTitle'>Pomodor Clock</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ctr:state.counter,
        ctr2:state.counter2,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        incrementCount:()=> dispatch({type:ActionTypes.ADD}),
        incrementCount2:()=> dispatch({type:ActionTypes.ADD2})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pomodor);
