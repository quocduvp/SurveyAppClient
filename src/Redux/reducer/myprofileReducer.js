import {FETCHED_MY_PROFILE, FETCHED_MY_PROFILE_ERR, UPDATE_MY_PROFILE} from "../action/myprofileActions";

const initialState = {
    profile : {
        userinfo : {
            avatar : ""
        },
        role: ""
    },
    fetched: false,
    err : null
}

export const myprofileReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case UPDATE_MY_PROFILE:{
            return {
                ...state,
                profile: actions.payload
            }
        }
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