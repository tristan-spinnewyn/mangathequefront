import {edition} from "../interface/classesInterface";
import {HEADER, url_api} from "./config";
import axios from "axios";

export async function addEditionApi(edition: edition){
    const url = `${url_api}/edition`
    const res = await axios.post(url,edition,HEADER)

    return res.status
}