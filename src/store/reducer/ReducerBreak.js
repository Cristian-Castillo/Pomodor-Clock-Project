import * as ActionType from './ActionTypes'

const initialState = {
    counter2:0
}

const reducer = (state = initialState, action) => {
    if(action.type == ActionType.ADD2){
        return{
            ...state,
            counter:state.counter+1
        }
    }
} 

export default initialState;