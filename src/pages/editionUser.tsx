import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getEditionApi, getNote, noteEdition} from "../api/editionApi";
import Tome from "../components/home/tome";
import {getConnectedUser} from "../api/userApi";
import StarRatings from 'react-star-ratings';

function EditionUser() {
    const {id} = useParams()
    const [edition,setEdition] = useState({id:'',nameEdition:'',statut:'',editeur:{id:'',nameEditeur:''},serie:{id:'',nameSeries:''},tomes:[{id:'',numero:'',imageCouverture:''}]})
    const getEdition = async()=>{
        if(id) {
            const data = await getEditionApi(id)
            var tomes = data[0].tomes
            tomes.sort(function (a:any, b:any) {
                return a.numero - b.numero;
            })
            setEdition({id:data[0].id,nameEdition: data[0].nameEdition,statut: data[0].statut,
                editeur: {id:data[0].editeur.id,nameEditeur: data[0].editeur.nameEditeur},
                serie:{id:data[0].serie.id,nameSeries: data[0].serie.nameSeries},
                tomes: tomes
            })
            const note = await getNote(id)
            if(note[0] !== null){
                setRating(note[0].note)
            }
        }
    }
    useEffect(()=>{
        getEdition()
    },[])
    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = async (rate: number) => {
        setRating(rate)
        if(id) {
            await noteEdition(id, rate)
        }
    }

    return (
        <div className="text-white w-[100%]">
            <h1 className="text-5xl">{edition.serie.nameSeries} - {edition.nameEdition}</h1>
            <StarRatings rating={rating} changeRating={handleRating} starRatedColor="yellow"/>
            <div className="w-[100%] h-[50px] mt-10">
                <h2 className="text-2xl">Série</h2>
                <Link to={`/serie/${edition.serie.id}`}><div className="border-b border-gray-500 w-[100%] mt-3 h-[40px]">{edition.serie.nameSeries}</div></Link>
            </div>
            <div className="w-[100%] h-[50px] mt-10">
                <h2 className="text-2xl">Editeur</h2>
                <Link to={`/editeur/${edition.editeur.id}`}><div className="border-b border-gray-500 w-[100%] mt-3 h-[40px]">{edition.editeur.nameEditeur}</div></Link>
            </div>
            <div className="w-[100%] h-[50px] mt-10">
                <h2>Editeur</h2>
                <div className="flex flex-wrap">
                    {edition.tomes.map((value,index)=>{
                        return <Tome tome={value} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default EditionUser;