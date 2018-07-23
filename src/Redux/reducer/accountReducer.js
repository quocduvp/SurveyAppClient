import {RECIEVE_TOKEN} from "../action/accountActions";

const initialState = {
    token : null,
    fetched : false,
    err : null
}

export const accountReducer = (state = initialState,actions)=>{
    switch (actions.type) {
        case RECIEVE_TOKEN:
            return{
                ...state,
                token: actions.payload
            }
        default:
            return state
    }
}