import {UserInterface} from "../interface/classesInterface";
import {url_api} from "./config";
import axios from "axios";

export async function register(user : UserInterface){
    const url = `${url_api}/users/`
    const response = await axios.post(url,user)

    return response.data
}

export async function authenticate(user:UserInterface){
    const url = `${url_api}/auth/`
    const response = await axios.post(url,user)

    return response.data
}