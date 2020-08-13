import * as ActionType from './ActionTypes'

const initialState = {
    counter:0
}

const reducer = (state = initialState, action) => {
    if(action.type == ActionType.ADD){
        return{
            ...state,
            counter:state.counter+1
        }
    }
} 

export default initialState;