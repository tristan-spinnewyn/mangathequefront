import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getSerieById} from "../api/serieApi";
import {optionsStatutEdition} from "../interface/variable";

function SerieUser() {
    let {id} = useParams()
    const [serie,setSerie] = useState({id:'',nameSeries:'',editions:[{id:'',nameEdition:'',statut:'',editeur:{id:'',nameEditeur:''},tomes:[]}],auteur:{id:'',nameAuteur:''}})
    const getSerieApi = async()=>{
        if(id){
            const data = await getSerieById(id)
            setSerie(data)
        }
    }
    useEffect(()=>{
        getSerieApi()
    },[])
    return (
        <div className="text-white w-[100%]">
            <h1 className="text-5xl">{serie.nameSeries}</h1>
            <div className="w-[100%] h-[50px] mt-10">
                <h2 className="text-2xl">Auteur</h2>
                <Link to={`/auteur/${serie.auteur.id}`}><div className="border-b border-gray-500 w-[100%] mt-3 h-[40px]">{serie.auteur.nameAuteur}</div></Link>
            </div>
            <div className="w-[100%] h-[50px] mt-10">
                <h2 className="text-2xl">Editions</h2>
                {serie.editions.map((value,index)=>{
                    const statut = optionsStatutEdition.filter(statut => statut.value.toString() == value.statut)
                    console.log(statut)
                    return <Link key={index} to={`/edition/${value.id}`}>
                        <div className="border-b border-gray-500 w-[100%] h-[100px]">
                            <div>{serie.nameSeries} - {value.nameEdition}</div>
                            <div>{value.tomes.length} tomes parus - {statut[0] ? statut[0].label : ''}</div>
                        </div>
                    </Link>
                })}
            </div>

        </div>
    );
}

export default SerieUser;