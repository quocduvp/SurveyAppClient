import axios from "axios";
import qs from 'qs'
import { submit_feedback } from "../../API/URL";
import { store } from "../store";

export async function submitFeedback(form){
    var settings = await {
        "async": true,
        "crossDomain": true,
        "url": submit_feedback,
        "method": "POST",
        "headers": {
          "Authorization": `bearer ${store.getState().account.token}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": qs.stringify(form)
      }
    const data = await axios(settings)
    return data
}