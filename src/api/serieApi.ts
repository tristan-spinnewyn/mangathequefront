import {HEADER, url_api} from "./config";
import axios from "axios";
import {serie} from "../interface/classesInterface";

export async function getSerie(name: string){
    let url = `${url_api}/series`
    let res;
    if(name === ""){
        res = await axios.get(url,HEADER)
    } else {
        url += `?name=${name}`
        res = await axios.get(url,HEADER)
    }
    return res.data;
}

export async function getSerieById(id: string){
    const url = `${url_api}/series/${id}`
    const res = await axios.get(url,HEADER)

    return res.data[0];
}

export async function addSerie(serie: serie){
    const url = `${url_api}/series`
    const res = await axios.post(url,serie,HEADER)

    return res.status
}

export async function updateSerie(serie:serie){
    const url = `${url_api}/series/${serie.id}`
    const res = await axios.put(url,serie,HEADER)

    return res.status
}