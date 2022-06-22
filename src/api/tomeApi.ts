import {HEADER, url_api} from "./config";
import axios from "axios";
import {tome} from "../interface/classesInterface";

export async function getTomeApi(id: string|number){
    const url = `${url_api}/tome/${id}`
    const res = await axios.get(url,HEADER)

    return res.data
}

export async function getTomesGoogle(search: string){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5`
    const res = await axios.get(url)

    return res.data
}

export async function getTomeGoogle(uid: string){
    const url = `https://www.googleapis.com/books/v1/volumes/${uid}`
    const res = await axios.get(url)

    return res.data
}

export async function addATome(tome: tome){
    const url = `${url_api}/tome`
    const res = await axios.post(url,tome,HEADER)

    return res.status
}

export async function updateTomeApi(tome:tome,id:string|number){
    const url = `${url_api}/tome/${id}`
    const res = await axios.put(url,tome,HEADER)

    return res.status
}

export async function getLastTome(){
    const url = `${url_api}/tome/new`
    const res = await axios.get(url,HEADER)

    return res.data
}