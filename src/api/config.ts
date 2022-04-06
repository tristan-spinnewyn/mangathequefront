import {getToken} from "../services/authService";

export const url_api= 'http://localhost:3000'

export const HEADER = {
    headers: {
        authorization: "Bearer " + getToken()
    }
}