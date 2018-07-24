const DISABLE_BUTTON = 'DISABLE_BUTTON'
const ENABLE_BUTTON = 'ENABLE_BUTTON'
 
const initialState = {
    disable : true
}

export const disableReducer = (state = initialState, actions)=>{
    switch(actions.type){
        case DISABLE_BUTTON:
            return{...state, disable : true}
        case ENABLE_BUTTON:
            return{...state, disable : false}
        default:
        return state
    }
}

export function disableButton(){
    return{
        type : DISABLE_BUTTON
    }
}
export function enableButton(){
    return{
        type : ENABLE_BUTTON
    }
}