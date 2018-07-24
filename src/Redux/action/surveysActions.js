import axios from "axios";
import swal from 'sweetalert2'
import {store} from "../store";
import qs from 'qs'
import {fetch_list_survey_incomming, fetch_list_survey_uncomming, submit_join_surveys, submit_answer_for_question, fetch_survey_details} from "../../API/URL";
import { createHashHistory } from 'history'
import { enableButton } from "../reducer/disableReducer";
export const FETCH_SURVEYS_LIST = "FETCH_SURVEYS_LIST"
export const FETCH_SURVEYS_START = "FETCH_SURVEYS_START"
export const FETCH_SURVEYS_STOP = "FETCH_SURVEYS_STOP"
export const FETCH_SURVEYS_DETAILS = "FETCH_SURVEYS_DETAILS"
export const FETCH_SURVEYS_LIST_UNCOMMING = "FETCH_SURVEYS_LIST_UNCOMMING"
export const JOINING_SURVEY_DETAILS = "JOINING_SURVEY_DETAILS"

const hist = createHashHistory()
//
export function fetchListSurveysUncomming() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": fetch_list_survey_uncomming,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCH_SURVEYS_LIST_UNCOMMING,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    text : 'Surveys not found',
                    type: 'error'
                })
            })
    }
}
//list survey incomming
export function fetchListSurveysIncomming() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": fetch_list_survey_incomming,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCH_SURVEYS_LIST,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    text : 'Surveys not found',
                    type: 'error'
                })
            })
    }
}

//View survey details
export function viewDetailsSurvey(idSurvey){
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${fetch_survey_details}/${idSurvey}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCH_SURVEYS_DETAILS,
                    payload : r.data
                })
                await hist.push('/Surveys/Reviews')
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    text : 'Surveys not found',
                    type: 'error'
                })
            })
    }
}
//change joinning survey 
export function changeJoinSurvey(idSurvey) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${submit_join_surveys}/${idSurvey}`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : JOINING_SURVEY_DETAILS,
                    payload : r.data
                })
                await hist.push('/Surveys/Joinning')
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    text : 'Surveys not found',
                    type: 'error'
                })
            })
    }
}

//change answer for question api/v1/surveys/join/idSurvey/question/idQuestion
//form { text : value, question_choice_id : value } //text if survey type is text and ..
export function submitAnswerForQuestion(form,idSurvey,idQuestion) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${submit_answer_for_question}/${idSurvey}/question/${idQuestion}`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            },
            "data" : qs.stringify(form)
        }
        await axios(settings)
            .then(async r=>{
                await swal({
                    title : 'Success',
                    text : 'Submit answer success',
                    type: 'success'
                })
                //enable button next
                await dispatch(enableButton())
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    text : 'Submit answer fails',
                    type: 'error'
                })
            })
    }
}
