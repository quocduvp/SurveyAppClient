import axios from "axios";
import qs from 'qs';
import swal from 'sweetalert2'
import {createHashHistory} from 'history'
import {
    RECIEVE_TOKEN
} from "./accountActions";
import {
    get_details_account,
    edit_my_profile,
    upload_avatar
} from "../../API/URL";
import {
    store
} from "../store";
const hist = createHashHistory()
export const FETCHED_MY_PROFILE = "FETCHED_MY_PROFILE"
export const FETCHED_MY_PROFILE_ERR = "FETCHED_MY_PROFILE_ERR"
export const UPDATE_MY_PROFILE = "UPDATE_MY_PROFILE"
export function fetchMyProfileWithLogin(token) {
    return requestMyProfile(token)
}

export function updateMyProfile(form) {
    return async dispatch => {
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": edit_my_profile,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r => {
                await swal({
                    type: 'success',
                    title: 'Success',
                    text: 'Edit your profile successful.'
                })
                await dispatch({
                    type: UPDATE_MY_PROFILE,
                    payload: r.data
                })
            }).catch(async err => {
                await swal({
                    type: 'error',
                    title: 'Error',
                    text: 'Edit your profile fails, try again later.'
                })
            })
    }
}

export function uploadAvatar(file) {
    return async dispatch => {
        let form = new FormData()
        await form.append('file', file)
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": upload_avatar,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().account.token}`
            },
            "mimeType": "multipart/form-data",
            "data": form
        }
        await axios(settings)
        .then(async r=>{
            await swal({
                title : 'Success',
                type : 'success',
                text : 'Upload image successful.'
            })
            await dispatch({
                type : FETCHED_MY_PROFILE,
                payload : r.data
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                type : 'error',
                text : 'Upload image fails.'
            })
        })
    }
}

//func
function requestMyProfile(token) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": get_details_account,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${token}`
            }
        }
        await axios(settings).then(async r => {
            await dispatch({
                type: RECIEVE_TOKEN,
                payload: token
            })
            await dispatch({
                type: FETCHED_MY_PROFILE,
                payload: r.data
            })
            //after login successful
            await hist.push('/Home')
        }).catch(async err => {
            await dispatch({
                type: FETCHED_MY_PROFILE_ERR,
                payload: err
            })
            await swal({
                type: 'error',
                title: 'Error',
                text: 'Login fails, try again later.'
            })
        })
    }
}