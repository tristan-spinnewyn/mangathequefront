import {HEADER, url_api} from "./config";
import axios from "axios";
import {auteur} from "../interface/classesInterface";

export async function getAuthor(name: string){
    let url = `${url_api}/auteurs`
    let res;
    if(name == ""){
        res = await axios.get(url,HEADER)
    } else {
        url += `?name=${name}`
        res = await axios.get(url,HEADER)
    }
    return res.data;
}

export async function getAuthorById(id: string){
    const url = `${url_api}/auteurs/${id}`
    const res = await axios.get(url,HEADER)

    return res.data[0];
}

export async function addAuthor(auteur: auteur){
    const url = `${url_api}/auteurs`
    const res = await axios.post(url,auteur,HEADER)

    return res.status
}

export async function updateAuthor(auteur:auteur){
    const url = `${url_api}/auteurs/${auteur.id}`
    const res = await axios.put(url,auteur,HEADER)

    return res.status
}