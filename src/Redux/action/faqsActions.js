import axios from "axios";
import swal from 'sweetalert2'
import {details_faqs, list_faqs} from "../../API/URL";
import {store} from "../store";
import {createHashHistory} from 'history'
export const FETCH_FAQS_START = "FETCH_FAQS_START"
export const FETCH_FAQS_STOP = "FETCH_FAQS_STOP"
export const FETCH_FAQS_LIST = "FETCH_FAQS_LIST"
export const FETCH_FAQS_DETAILS = "FETCH_FAQS_DETAILS"
const hist = createHashHistory()
export function fetchListFAQs() {
    return async dispatch => {
        const setting = await {
            "async": true,
            "crossDomain": true,
            "url": list_faqs,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await dispatch({
            type: FETCH_FAQS_START
        })
        await axios(setting)
            .then(async r=>{
                await dispatch({
                    type : FETCH_FAQS_LIST,
                    payload : r.data
                })
                await dispatch({
                    type: FETCH_FAQS_STOP
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    type : 'error',
                    text : 'Error 404'
                })
            })
    }
}
//get details faqs
export function fetchDetailsFAQs(id) {
    return async dispatch => {
        const setting = await {
            "async": true,
            "crossDomain": true,
            "url": `${details_faqs}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            }
        }
        await dispatch({
            type: FETCH_FAQS_START
        })
        await axios(setting)
            .then(async r=>{
                await dispatch({
                    type : FETCH_FAQS_DETAILS,
                    payload : r.data
                })
                await dispatch({
                    type: FETCH_FAQS_STOP
                })
            }).catch(async err=>{
                await hist.push('/faqs')
            })
    }
}