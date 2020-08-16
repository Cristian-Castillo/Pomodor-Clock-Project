import React,{Component} from 'react'
import './SessionTimeStyle.css'


class SessionTimeDisplay extends Component{

    constructor(props){
        super(props);
        this.state = {
            masterMinutes:25,
            masterSeconds:59,
            propMasterMinute:null,
            localFlag:false,
            pauseFlag:false
        }
    }
    render(){    
        /* If the user inputs new value and detected copy state for setInterval 
        countdown process */
        if(this.props.propFlag === true && this.state.localFlag === false){
            const {propMasterMinute} = this.props
            let objTemp = Object.assign({},this.state)
            this.setState({
                ...objTemp,
                propMasterMinute:propMasterMinute-1,
                localFlag:true,
            })
        }
        let display = null

        if(this.props.propFlag === true){
            display = (<h1 className ='fontSesh'>{this.state.propMasterMinute} : {this.state.masterSeconds}</h1>)
        }
        if(this.props.propsPauseFlag === true && this.props.propFlag === true){
            display = (<h1 className = 'fontSesh'>PAUSE</h1>)
        }
        else{
            display = (<h1 className ='fontSesh'>{this.props.propFlag === true ? this.state.propMasterMinute : this.props.propMasterMinute} : {this.props.propFlag === true ? this.state.masterSeconds : '00'}</h1>)
        }

        return (
            <div className = 'container-fluid'>
                <div className = 'session-layout'>
                    <h1 className ='fontSesh'>Session</h1>
                    {display}
                </div>
            </div>
        )
    }

    componentDidMount(){
        
        this.myInterval = setInterval(() => {
            
            if(this.props.propFlag === true){
                /* If it was determined that there was a click by the user to play
                begin counting down */
                if(this.state.masterSeconds === 0){
                    
                    if(this.state.masterSeconds === 0 && this.state.propMasterMinute === 0){
                        return
                    }
                    this.setState((prevState) => ({
                        masterSeconds:prevState.masterSeconds = 59,
                        propMasterMinute:prevState.propMasterMinute-1
                    }))
                }
                if(this.props.propFlag === true){
                    this.setState((prevState) => ({
                        masterSeconds:prevState.masterSeconds-1
                    }))
                }
            }
            },1000)
        }
        // clear memory so no memory leaks
        componentWillUnmount(){
            clearInterval(this.myInterval)
        }
}

export default SessionTimeDisplay;