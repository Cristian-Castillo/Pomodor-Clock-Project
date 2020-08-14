import React, { Component } from 'react'

import BreakLength from './BreakLength'
import SessionLength from './SessionLength'
import SessionTimeDisplay from './SessionTimeDisplay'

import * as ActionTypes from  '../store/reducer/ActionTypes'
import {connect} from 'react-redux'

import './PomodorStyle.css'
import { FaPlayCircle } from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'
import {MdSettingsBackupRestore} from 'react-icons/md'

class Pomodor extends Component {

    /* DOM INTERACTIVE ANIMATION ON CLICK*/
    animateHandleButton = () => {

        let buttonContainer = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            buttonContainer[i] = document.getElementsByTagName('button')[i];
            buttonContainer[i].style.backgroundColor = '#282c34'
            buttonContainer[i].style.color = '#61dafb'
            buttonContainer[i].addEventListener('click',this.handleButtonBackground);
        }
    }

    handleButtonBackground = () => {

        let buttonContainer = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            buttonContainer[i] = document.getElementsByTagName('button')[i];
        }

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            
            if(buttonContainer[i] === buttonContainer[0]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[1]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[2]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[3]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[4]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[5]){
                buttonContainer[i].addEventListener('click',foo);
            }
            else if(buttonContainer[i] === buttonContainer[6]){
                buttonContainer[i].addEventListener('click',foo);
            }
            function foo(){
                buttonContainer[i].style.backgroundColor = '#61dafb'
                buttonContainer[i].style.color = 'black'
                buttonContainer[i].removeEventListener('click',foo)
            }
        }
    }
    /* End of Button Animation for DOM */

    render() {

        const getSessionValue = this.props.ctr
        const getBreakValue = this.props.ctr2

        return (
            <div className ='App-header'>
                    {/* Container with child components to display rendered props from state redux */}
                    <div className ='container-fluid'>
                        <div className ='row'>
                            <h1 className = 'pomodorTitle'>Pomodor Clock</h1>
                        </div>
                        <div className = 'row'>
                            <div className = "col">
                                <h4><span> {/* Button Session Config */}
                                        <button onMouseDown = {this.animateHandleButton} 
                                            onMouseLeave = {this.animateHandleButton} 
                                            onClick = {this.props.subSessionCount} 
                                            className = 'btn1'>-</button>
                                            Session Length
                                            <button onMouseDown = {this.animateHandleButton} 
                                            onMouseLeave = {this.animateHandleButton} 
                                            onClick = {this.props.addSessionCount} 
                                            className = 'btn2'>+
                                        </button>
                                    </span>
                                    <SessionLength prop2 = {this.props.ctr}/>
                                </h4>
                            </div>
                        </div>
                        <div className ='row'>
                            <div className = "col">
                                <h4><span>{/* Button Break Config */}
                                        <button onMouseDown = {this.animateHandleButton} 
                                            onMouseLeave = {this.animateHandleButton} 
                                            onClick = {this.props.decrementCount} 
                                            className='btn3'>-</button>
                                            Break Length
                                            <button onMouseDown = {this.animateHandleButton} 
                                            onMouseLeave = {this.animateHandleButton} 
                                            onClick = {this.props.incrementCount} 
                                            className='btn4'>+
                                        </button>
                                    </span>
                                    <BreakLength prop1 = {this.props.ctr2}/>
                                </h4>
                            </div>
                        </div>
                        <div style= {{marginTop:'30px'}} className = 'row'>
                            <SessionTimeDisplay prop3 = '25 : 00'/>
                            <div style = {{margin:'auto'}}>
                                <div className = 'row'>
                                    <div className = 'col'>
                                        <h3>
                                            <button  onMouseDown = {this.animateHandleButton} 
                                                onMouseLeave = {this.animateHandleButton} 
                                                onClick = {this.props.subSessionCount}
                                                className ='playStyle' onClick = {'tacos'}><FaPlayCircle />
                                            </button>
                                        </h3>
                                    </div>
                                    <div className = 'col'>
                                        <h3><button onMouseDown = {this.animateHandleButton} 
                                                onMouseLeave = {this.animateHandleButton} 
                                                onClick = {this.props.subSessionCount} 
                                                className ='playStyle' 
                                                onClick = {'tacos'}><FaPauseCircle />
                                            </button>
                                        </h3>
                                    </div>
                                    <div className = 'col'>
                                        <h3 style = {{color:'cyan'}}>
                                            <button onMouseDown = {this.animateHandleButton} 
                                                onMouseLeave = {this.animateHandleButton} 
                                                onClick = {this.props.subSessionCount} 
                                                className ='playStyle' onClick = {'tacos'}><MdSettingsBackupRestore />
                                            </button>
                                        </h3>
                                    </div>
                                </div>
                                <div style = {{marginTop:'25px'}}className ='row'>
                                    <div>
                                        <h5>Designed and Coded By</h5>
                                        <h5>Cristian C. Castillo</h5>
                                    </div>
                                </div>
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
        decrementCount:()=> dispatch({type:ActionTypes.DECREMENT}),
    }
}

/* Connect and map state and dispatch with app component */
export default connect(mapStateToProps,mapDispatchToProps)(Pomodor);

