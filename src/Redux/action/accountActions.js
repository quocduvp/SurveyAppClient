import axios from "axios";
import qs from 'qs'
import swal from 'sweetalert2'
import {forgot_password, post_login, reset_my_password} from "../../API/URL";
import {fetchMyProfileWithLogin, FETCHED_MY_PROFILE} from '../action/myprofileActions'
import { store } from "../store";

export const RECIEVE_TOKEN = 'RECIEVE_TOKEN'

export function loginAccount(form) {
    return loginAndSetToken(form)
}

export function forgotPassword(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": forgot_password,
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r => {
                await swal({
                    text: 'Report my account successfull, the administrator will check and provide you with the latest password. Thank you',
                    type: 'success',
                    title: 'Success'
                })
            }).catch(async err => {
                await swal({
                    text: 'It looks like this account has been reported or can not be found, please check again',
                    type: 'error',
                    title: 'Error'
                })
            })
    }
}

export function resetPassword(form){
    return async dispatch => {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": reset_my_password,
            "method": "POST",
            "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `bearer ${store.getState().account.token}`
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
        .then(async r=>{
            await swal({
                title : 'Success',
                icon : 'success',
                text : 'Reset my password successful.'
            })
            await dispatch({
                type : FETCHED_MY_PROFILE,
                payload : r.data
            })
        }).catch(async err=>{
            await swal({
                text:'Reset password fails.',
                title : 'Error',
                type : 'error'
            })
        })
    }
}

//func
function loginAndSetToken(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": post_login,
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": qs.stringify(form)
        }
        await axios(settings).then(async r => {
            await dispatch({
                type: RECIEVE_TOKEN,
                payload: r.data
            })
            await dispatch(fetchMyProfileWithLogin(r.data.access_token))
            await sessionStorage.setItem("access_token", r.data.access_token)
        }).catch(async err => {
            swal({
                text: 'Login fails',
                type: 'error',
                title: 'Error'
            })
        })
    }
}