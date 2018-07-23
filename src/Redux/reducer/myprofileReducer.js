import {FETCHED_MY_PROFILE, FETCHED_MY_PROFILE_ERR} from "../action/myprofileActions";

const initialState = {
    profile : {
        userinfo : ""
    },
    fetched: false,
    err : null
}

export const myprofileReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case FETCHED_MY_PROFILE:
            return {
                ...state,
                profile: actions.payload,
                fetched: true
            }
        case FETCHED_MY_PROFILE_ERR:
            return{
                ...state,
                err: actions.payload,
                fetched : false
            }
        default:
            return state
    }
}