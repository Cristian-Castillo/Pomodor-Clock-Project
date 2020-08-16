import * as ActionTypes from './ActionTypes'

const initialState = {
    masterSessionCount:25,
    masterFlag:false,
    masterPause:false,
    masterReset:false
}

const MasterReducer = (state = initialState, action) => {
    let session = action.sessionVal
    
    switch(action.type){
        case ActionTypes.PLAY:

            let flagVal = !action.flagging

            if(state.masterPause === true && state.masterFlag === true){
                return{
                    ...state,
                    masterFlag:state.masterFlag = flagVal,
                    masterPause:state.masterPause = false
                }
            }
            else if(state.masterFlag === false && state.masterPause === true){
                return {...initialState}
            }
            else{
                return{
                    ...state,
                    masterSessionCount:session,
                    masterFlag:flagVal
                }
            }
        case ActionTypes.PAUSE:
            return{
                ...state,
                masterPause:!state.masterPause
            }
        case ActionTypes.RESET:
            return{...initialState}  
        default:
            return state
    }
} 

export default MasterReducer;