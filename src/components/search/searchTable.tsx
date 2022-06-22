import React, {useEffect, useState} from 'react';
import {searchTable} from "../../interface/searchBar";
import {getAuthor} from "../../api/authorApi";
import {getSerie} from "../../api/serieApi";
import {getEditor} from "../../api/editorApi";
import ElemTable from "../admin/elemTable";

function SearchTable(props:searchTable) {
    const [lstElem,setLstElem] = useState<any[]>([])
    useEffect(()=>{
        const getContent = async()=>{
            setLstElem([])
            if(props.whatIs.isAuthor){
                const autors = await getAuthor(props.search.name)
                for(let i = 0; i < autors.length; i++){
                    setLstElem(prevState => [...prevState, {link:`/auteur/${autors[i].id}`,name:autors[i].nameAuteur}])
                }
            }
            if(props.whatIs.isSerie){
                const serie = await getSerie(props.search.name)
                for(let i = 0; i < serie.length; i++){
                    setLstElem(prevState => [...prevState, {link:`/serie/${serie[i].id}`,name:serie[i].nameSeries}])
                }
            }
            if(props.whatIs.isEditor){
                const editeur = await getEditor(props.search.name)
                for(let i = 0; i < editeur.length; i++){
                    setLstElem(prevState => [...prevState, {link:`/editeur/${editeur[i].id}`,name:editeur[i].nameEditeur}])
                }
            }
        }
        getContent()
    },[props.search,props.whatIs])
    return (
        <table className="w-[100%] pl-3 text-white">
            <thead>
            <tr></tr>
            <tr></tr>
            </thead>
            <tbody>
            {lstElem.map((data,index) =>{
                return <ElemTable key={index} name={data.name} link={data.link} buttonLabel='Voir'/>
            })}
            </tbody>
        </table>
    );
}

export default SearchTable;