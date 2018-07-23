import axios from "axios";
import swal from 'sweetalert2'
import {store} from "../store";
import {fetch_list_survey_incomming, fetch_list_survey_uncomming} from "../../API/URL";
export const FETCH_SURVEYS_LIST = "FETCH_SURVEYS_LIST"
export const FETCH_SURVEYS_START = "FETCH_SURVEYS_START"
export const FETCH_SURVEYS_STOP = "FETCH_SURVEYS_STOP"
export const FETCH_SURVEYS_DETAILS = "FETCH_SURVEYS_DETAILS"
export const FETCH_SURVEYS_LIST_UNCOMMING = "FETCH_SURVEYS_LIST_UNCOMMING"

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