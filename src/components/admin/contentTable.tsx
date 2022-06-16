import React, {useEffect, useState} from 'react';
import {AdminContentTable} from "../../interface/admin";
import {getAuthor} from "../../api/authorApi";
import ElemTable from "./elemTable";
import {getEditor} from "../../api/editorApi";

function ContentTable(props: AdminContentTable) {
    const [lstElem,setLstElem] = useState<any[]>([])
    useEffect(()=>{
        const getContent = async()=>{
            setLstElem([])
            if(props.isAuthor){
                const autors = await getAuthor(props.search.name)
                for(let i = 0; i < autors.length; i++){
                    setLstElem(prevState => [...prevState, {link:`/admin/auteur/${autors[i].id}`,name:autors[i].nameAuteur}])
                }
            }
            if(props.isSerie){
                //todo isSerie
            }
            if(props.isEditor){
                const editeur = await getEditor(props.search.name)
                for(let i = 0; i < editeur.length; i++){
                    setLstElem(prevState => [...prevState, {link:`/admin/editeur/${editeur[i].id}`,name:editeur[i].nameEditeur}])
                }
            }
        }
        getContent()
    },[props.search])
    return (
        <table className="w-[100%] pl-3">
            <thead>
            <tr></tr>
            <tr></tr>
            </thead>
            <tbody>
            {lstElem.map((data,index) =>{
                return <ElemTable key={index} name={data.name} link={data.link} />
            })}
            </tbody>
        </table>
    );
}

export default ContentTable;