import React,{Component} from 'react'
import './SessionTimeStyle.css'


class SessionTimeDisplay extends Component{

    constructor(props){
        super(props);
        this.state = {
            masterMinutes:25,
            masterSeconds:59,
            masterBreakSeconds:59,
            propMasterMinute:null,
            propMasterBreak:null,
            localFlag:false,
            pauseFlag:false,
            breakFlag:false,
            beepFlag:false,
        }
    }

    render(){   
        /* Handle Audio Section*/
        let beeping = document.getElementById('beep')

        if(this.state.beepFlag === true){
            beeping.play()
            this.setState({
                beepFlag:false
            })
        }
        /* End of Handle Audio Section*/

        /* If the user inputs new value and detected copy state for setInterval 
        countdown process */
        if(this.props.propFlag === false && this.state.localFlag === true){
            let objTemp = Object.assign({},this.state)
            this.setState({
                ...objTemp,
                localFlag:false,
                masterMinutes:25,
                masterSeconds:59,
                propMasterMinute:null,
                pauseFlag:false
            })
        }
        else if(this.props.propFlag === true && this.state.localFlag === false){
            const {propMasterMinute} = this.props
            const {propBreak} = this.props
            let objTemp = Object.assign({},this.state)
            this.setState({
                ...objTemp,
                propMasterMinute:propMasterMinute-1,
                propMasterBreak:propBreak,
                localFlag:true,
            })
        }
        /* Conditional Rendering to Session Clock & Break Length Num Section */
        let display = null,displayStr = null

        if(this.props.propFlag === true){
            display = (<h1 className ='fontSesh'>{this.state.propMasterMinute} : {this.state.masterSeconds}</h1>)
        }
        else if(this.props.propsPauseFlag === true && this.props.propFlag === true){
            display = (<h1 className = 'fontSesh'>PAUSE</h1>)
        }
        else if(this.state.breakFlag === true){
    
            this.setState({
                breakFlag:false
            })
        }
        else{
            display = (<h1 className ='fontSesh'>{this.props.propFlag === true ? this.state.propMasterMinute : this.props.propMasterMinute} : {this.props.propFlag === true ? this.state.masterSeconds : '00'}</h1>)
        }
        /* End of Conditional Rendering to Session Clock & Break Length Num Section */
        if(this.state.breakFlag === true){
            displayStr = (<h1 className ='fontSesh'>{this.state.masterSeconds === 0 ? 'Reset' : 'Break'}</h1>);
        }
        else if(this.state.breakFlag !== true){
            displayStr = (<h1 className ='fontSesh'>Session</h1>);
        }
        /* Render Session & Break Str */

        return (
            <div className = 'container-fluid'>
                <div className = 'session-layout'>
                    {displayStr}
                    <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                    {display}
                </div>
            </div>
        )
    }

    componentDidMount(){
        
    this.myInterval = setInterval(() => {
        
        if(this.props.propFlag === true){

            /* If it was determined that there was a click by the user to play
            begin counting down of outer clock Session. Inner is Break length*/
            if(this.state.masterSeconds === 0){

                // Seconds and minutes for session have both reached 0, switch to break 
                // length time
                if(this.state.masterSeconds === 0 && this.state.propMasterMinute === 0){

                    /* BREAK LENGTH TIMER SECTION */
                    if(this.state.breakFlag !== true){
                        this.setState((prevState) => ({
                            masterSeconds:prevState.masterSeconds = 59,
                            propMasterMinute:prevState.propMasterBreak,
                            breakFlag:prevState.breakFlag = true,
                            beepFlag:prevState.beepFlag = true,
                        }))
                    }
                    else{
                        clearInterval(this.myInterval)
                        return
                    }
                    this.myInterval = setInterval(() => {
                        
                        if(this.state.masterSeconds === 0){

                            this.setState((prevState) => ({
                                propMasterMinute:prevState.propMasterBreak-1,
                                masterSeconds:prevState.masterSeconds = 59
                            }))
                        }
                        this.setState((prevState) => ({
                            masterSeconds:prevState.masterSeconds-1
                        }))

                    },1000) 
                    clearInterval(this.myInterval)
                    /* END OF BREAK LENGTH TIMER SECTION */
                }
                this.setState((prevState) => ({
                    masterSeconds:prevState.masterSeconds = 59,
                    propMasterMinute:prevState.propMasterMinute-1
                }))
            }
            else if(this.props.propFlag === true){
                this.setState((prevState) => ({
                    masterSeconds:prevState.masterSeconds-1
                }))
            }
            else{
                clearInterval(this.myInterval)
            }
        }
        },1000)
    }
    // clear memory - no memory leaks
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}

export default SessionTimeDisplay;