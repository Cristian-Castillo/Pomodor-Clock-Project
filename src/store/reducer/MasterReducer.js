import * as ActionTypes from './ActionTypes'

const initialState = {
    masterSessionCount:25,
    masterBreakCount:5,
}

const MasterReducer = (state = initialState, action) => {
    

    switch(action.type){
        case ActionTypes.PLAY:
            return{
                ...state,
                masterSessionCount:state.masterSessionCount = action.sessionVal,
                masterBreakCount:state.masterBreakCount = action.breakVal,
            }
        default:
            return state
    }
} 

export default MasterReducer;