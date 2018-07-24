import { combineReducers } from 'redux'
import {accountReducer} from "./reducer/accountReducer";
import {myprofileReducer} from "./reducer/myprofileReducer";
import {faqsReducer} from "./reducer/faqsReducer";
import {surveysReducer} from "./reducer/surveysReducer";
import { disableReducer } from './reducer/disableReducer';

export const root = combineReducers({
    account : accountReducer,
    myprofile : myprofileReducer,
    faqs : faqsReducer,
    surveys : surveysReducer,
    button : disableReducer  
})