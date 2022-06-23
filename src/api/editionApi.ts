import {edition} from "../interface/classesInterface";
import {HEADER, url_api} from "./config";
import axios from "axios";

export async function addEditionApi(edition: edition){
    const url = `${url_api}/edition`
    const res = await axios.post(url,edition,HEADER)

    return res.status
}

export async function getEditionApi(id: number|string){
    const url = `${url_api}/edition/${id}`
    const res = await axios.get(url,HEADER)

    return res.data
}

export async function updateEditionApi(edition: edition){
    const url = `${url_api}/edition/${edition.id}`
    const res = await axios.put(url,edition,HEADER)

    return res.status
}

export async function noteEdition(id:number|string,note:number){
    const url = `${url_api}/edition/${id}/add`
    const res = await axios.post(url,{note:note},HEADER)

    return res.status
}

export async function getNote(id:number|string){
    const url = `${url_api}/edition/${id}/getNote`
    const res = await axios.get(url,HEADER)

    return res.data
}