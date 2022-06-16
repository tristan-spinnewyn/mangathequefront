import {HEADER, url_api} from "./config";
import axios from "axios";
import {editeur} from "../interface/classesInterface";

export async function getEditor(name: string){
    let url = `${url_api}/editeurs`
    let res;
    if(name === ""){
        res = await axios.get(url,HEADER)
    } else {
        url += `?name=${name}`
        res = await axios.get(url,HEADER)
    }
    return res.data;
}
export async function getEditeurById(id: string){
    const url = `${url_api}/editeurs/${id}`
    const res = await axios.get(url,HEADER)

    return res.data[0];
}

export async function addEditeur(editeurData: editeur){
    const url = `${url_api}/editeurs`
    const res = await axios.post(url,editeurData,HEADER)

    return res.status
}

export async function updateEditeur(editeurData:editeur){
    const url = `${url_api}/editeurs/${editeurData.id}`
    const res = await axios.put(url,editeurData,HEADER)

    return res.status
}