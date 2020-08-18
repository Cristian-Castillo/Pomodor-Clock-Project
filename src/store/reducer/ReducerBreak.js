import * as ActionTypes from './ActionTypes'

const initialState = {
    countBreak:5
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case ActionTypes.INCREMENT:
            if(state.countBreak < 60){
                return{
                    ...state,
                    countBreak:state.countBreak+1
                }
            }
            else{
                return {...state}
            }
        case ActionTypes.DECREMENT:
            if(state.countBreak > 1){
                return{
                    ...state,
                    countBreak:state.countBreak-1
                }
            }
            else{
                return {...state}
            }
        case ActionTypes.RESET:
            return{...initialState}
        default:
            return state
    }
} 

export default reducer;