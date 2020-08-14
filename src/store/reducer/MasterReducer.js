import * as ActionTypes from './ActionTypes'

const initialState = {
    masterCount:5
}

const MasterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.INCREMENT:
            if(state.masterCount < 60){
                return{
                    ...state,
                    masterCount:state.masterCount+1
                }
            }
            else{
                return{...state}
            }
        case ActionTypes.DECREMENT:
            if(state.masterCount > 1){
                return{
                    ...state,
                    masterCount:state.masterCount-1
                }
            }
            else{
                return{...state}
            }
        default:
            return state
    }
} 

export default MasterReducer;