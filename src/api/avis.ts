import {HEADER, url_api} from "./config";
import axios from "axios";
import {avis} from "../interface/classesInterface";

export async function addAvisApi(avis: { commantaire: string; tomeId: string | undefined }){
    const url = `${url_api}/avis`
    const res = await axios.post(url,avis,HEADER)

    return res.status
}

export async function signaleeAvis(id:string|number){
    const url = `${url_api}/avis/${id}/signale`
    const res = await axios.put(url,null,HEADER)

    return res.status
}