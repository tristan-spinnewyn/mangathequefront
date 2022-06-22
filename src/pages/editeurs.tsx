import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getEditeurById} from "../api/editorApi";

function Editeurs() {
    let {id} = useParams()
    const [editeur,setEditeur] = useState({id:'',nameEditeur:'',editions:[{id:'',nameEdition:'',serie:{id:'',nameSeries:''}}]})
    const getEditeur = async ()=>{
        if(id) {
            const data = await getEditeurById(id)
            setEditeur({id:data.id,nameEditeur: data.nameEditeur,editions: data.editions})
            console.log(editeur)
        }
    }
    useEffect(()=>{
        getEditeur()
    },[])
    return (
        <div className="text-white w-[100%]">
            <h1 className="text-5xl">{editeur.nameEditeur}</h1>
            {editeur.editions.map((value,index)=>{
                return <Link key={index} to={`/edition/${value.id}`}><div className="border-b border-gray-500 w-[100%] h-[40px]">{value.serie.nameSeries} - {value.nameEdition}</div></Link>
            })}
        </div>
    );
}

export default Editeurs;