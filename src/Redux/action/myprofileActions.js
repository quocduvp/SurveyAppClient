import axios from "axios";
import {RECIEVE_TOKEN} from "./accountActions";
import {get_details_account} from "../../API/URL";

export const FETCHED_MY_PROFILE = "FETCHED_MY_PROFILE"
export const FETCHED_MY_PROFILE_ERR = "FETCHED_MY_PROFILE_ERR"

export function fetchMyProfileWithLogin(token) {
    return requestMyProfile(token)
}

//func
function requestMyProfile(token){
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
        await axios(settings).then(async r=>{
            await dispatch({
                type : RECIEVE_TOKEN,
                payload : token
            })
            await dispatch({
                type : FETCHED_MY_PROFILE,
                payload : r.data
            })
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_MY_PROFILE_ERR,
                payload : err
            })
        })
    }
}