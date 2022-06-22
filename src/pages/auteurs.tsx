import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getAuthorById} from "../api/authorApi";

function Auteurs() {
    const {id} = useParams()
    const [auteur,setAuteur] = useState({id:'',nameAuteur:'',series:[{id:'',nameSeries:''}]})
    const getAuteurs = async()=>{
        if(id) {
            const data = await getAuthorById(id)
            setAuteur({id:data.id,nameAuteur: data.nameAuteur,series: data.series})
            console.log(data.series)
        }
    }
    useEffect(()=>{
        getAuteurs()
    },[])
    return (
        <div className="text-white w-[100%]">
            <h1 className="text-5xl">{auteur.nameAuteur}</h1>
            {auteur.series.map((value,index)=>{
                return <Link key={index} to={`/serie/${value.id}`}><div className="border-b border-gray-500 w-[100%] h-[40px]">{value.nameSeries}</div></Link>
            })}
        </div>
    );
}

export default Auteurs;