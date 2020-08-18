import * as ActionTypes from './ActionTypes'

const initialState = {
    countSession:25,
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case ActionTypes.ADD:

            if(state.countSession < 60){
                return{
                    ...state,
                    countSession:state.countSession+1
                }
            }
            else{
                return {...state}
            }
        case ActionTypes.SUBTRACT:
            if(state.countSession > 1){
                return{
                    ...state,
                    countSession:state.countSession-1
                }
            }
            else{
                return {...state}
            }
        case ActionTypes.RESET:
            return{...initialState}
            
        default:
            return{...state}
    }
} 

export default reducer;