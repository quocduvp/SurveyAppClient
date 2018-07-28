import { store } from "../store";
import { get_list_classrooms } from "../../API/URL";
import axios from 'axios'
export async function getListClassroom() {
    const settings = await {
        "url": get_list_classrooms,
        "method": "GET",
        "headers": {
            "Authorization": `bearer ${store.getState().account.token}`
        }
    }
    const data = await axios(settings)
    return data
}