import * as ActionTypes from './ActionTypes'

const initialState = {
    masterSessionCount:25,
    masterFlag:false
}

const MasterReducer = (state = initialState, action) => {
    let session = action.sessionVal
    
    switch(action.type){
        case ActionTypes.PLAY:

            let flagVal = !action.flagging
            return{
                ...state,
                masterSessionCount:state.masterSessionCount = session,
                masterFlag:state.masterFlag = flagVal
            }
        default:
            return state
    }
} 

export default MasterReducer;