import * as ActionTypes from './ActionTypes'

const initialState = {
    masterSessionCount:25,
    masterBreakCount:5,
}

const MasterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.PLAY:
            console.log(action)
            console.log('does this work: ' + action.sessionVal + ' = ' + ' ' + action.breakVal)
        default:
            return state
    }
} 

export default MasterReducer;