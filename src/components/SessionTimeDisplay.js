import React,{Component} from 'react'
import './SessionTimeStyle.css'

class SessionTimeDisplay extends Component{

    constructor(props){
        super(props);
        this.state = {
            masterMinutes:this.props.propMasterMinute,
            masterSeconds:this.props.propMasterSecond,
        }
    }

    render(){
        /* Destructure from local state */
        const {masterMinutes} = this.state
        const {masterSeconds} = this.state

        return (
            <div className = 'container-fluid'>
                <div className = 'session-layout'>
                    <h1 className ='fontSesh'>Session</h1>
                    <h1 className ='fontSesh'>{masterMinutes} : {masterSeconds}</h1>
                </div>
            </div>
        )
    }

    componentDidMount(){

        this.myInterval = setInterval(()=> {

                if(this.state.masterSeconds === 0){

                    if(this.state.masterMinutes === 0 && this.state.masterSeconds === 0){
                        return
                    }

                    this.state.masterSeconds = 60
                    this.state.masterMinutes -= 1
                }

                this.setState(prevState => ({
                    masterMinutes:prevState.masterMinutes,
                    masterSeconds:prevState.masterSeconds-1,
                }))
        },1000)
}
    // clear memory so no memory leaks
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
    // render(), it will execute same old method
}

export default SessionTimeDisplay;