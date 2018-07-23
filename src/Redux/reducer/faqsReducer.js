import {FETCH_FAQS_DETAILS, FETCH_FAQS_LIST, FETCH_FAQS_START, FETCH_FAQS_STOP} from "../action/faqsActions";

const initialState = {
    faqs : [],
    details : {
      title : "",
      body : "",
      create_at:""
    },
    fetched : true
}

export const faqsReducer = (state=initialState,actions) => {
    switch (actions.type){
        case FETCH_FAQS_START:
            return{
                ...state,
                fetched: true
            }
        case FETCH_FAQS_STOP:
            return{
                ...state,
                fetched : false
            }
        case FETCH_FAQS_LIST:
            return{
                ...state,
                faqs : actions.payload
            }
        case FETCH_FAQS_DETAILS:
            return{
                ...state,
                details : actions.payload
            }
        default:
            return state
    }
}