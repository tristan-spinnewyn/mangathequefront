import {updatePasswordInterface, updateUserInterface, UserInterface} from "../interface/classesInterface";
import {HEADER, url_api} from "./config";
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

export async function updateConnectedUser(user: updateUserInterface){
    const url = `${url_api}/users`
    const response = await axios.put(url, user,HEADER)

    return response.data
}

export async function updatePasswordConnectedUser(user: updatePasswordInterface){
    const url = `${url_api}/users`
    const response = await axios.put(url, user,HEADER)

    return response.data
}

export async function getConnectedUser(){
    const url = `${url_api}/users/connected`
    const res = await axios.get(url,HEADER)

    return res.data
}