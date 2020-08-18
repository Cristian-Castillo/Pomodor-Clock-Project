import * as ActionTypes from './ActionTypes'

const initialState = {
    masterSessionCount:25,
    masterBreakCount:5,
    masterFlag:false,
    masterPause:false,
}

const MasterReducer = (state = initialState, action) => {
    let session = action.sessionVal
    let breakNum = action.breakVal
    
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
                return { ...state,
                    masterSessionCount:session,
                    masterBreakCount:breakNum,
                    masterFlag:flagVal
                }
            }
            else{
                return{
                    ...state,
                    masterSessionCount:session,
                    masterBreakCount:breakNum,
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