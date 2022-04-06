import {getToken} from "../services/authService";


export const HEADER = {
    headers: {
        authorization: "Bearer " + getToken()
    }
}
export const url_api = 'https://mangatheque-prod.herokuapp.com'