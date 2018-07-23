import { combineReducers } from 'redux'
import {accountReducer} from "./reducer/accountReducer";
import {myprofileReducer} from "./reducer/myprofileReducer";
import {faqsReducer} from "./reducer/faqsReducer";
import {surveysReducer} from "./reducer/surveysReducer";

export const root = combineReducers({
    account : accountReducer,
    myprofile : myprofileReducer,
    faqs : faqsReducer,
    surveys : surveysReducer
})