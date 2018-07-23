import {
    FETCH_SURVEYS_DETAILS,
    FETCH_SURVEYS_LIST, FETCH_SURVEYS_LIST_UNCOMMING,
    FETCH_SURVEYS_START,
    FETCH_SURVEYS_STOP
} from "../action/surveysActions";

const initialState = {
    surveys : [{
        date_start : ""
    }],
    surveys_uncomming : [{
        date_start : ""
    }],
    details : {

    },
    fetched : true
}

export const surveysReducer = (state=initialState,actions)=>{
    switch (actions.type){
        case FETCH_SURVEYS_START:
            return{
                ...state,fetched: true
            }
        case FETCH_SURVEYS_STOP:
            return{
                ...state,fetched: false
            }
        case FETCH_SURVEYS_DETAILS:
            return{
                ...state,details: actions.payload
            }
        case FETCH_SURVEYS_LIST_UNCOMMING:
            return{
                ...state,surveys_uncomming: actions.payload
            }
        case FETCH_SURVEYS_LIST:
            return{
                ...state,surveys: actions.payload
            }
        default:
            return state
    }
}