import React, {useEffect, useState} from 'react';
import {getAuthor} from "../../api/authorApi";
import {select} from "../../interface/admin";
import Select from "react-select";

function LstAuteur(props: select) {
    const [auteurs,setAuteurs] = useState<any[]>([])
    const [selectedAuteur,setSelectedAuteur] = useState<any>(null)
    const getAuteur = async()=>{
        setAuteurs([])
        const lstAuteur = await getAuthor('')
        for(let i =0; i <lstAuteur.length; i++){
            setAuteurs(prevSate => [...prevSate, {value: lstAuteur[i].id,label:lstAuteur[i].nameAuteur}])
        }
    }
    useEffect(()=>{
        getAuteur()
        console.log(props.value)
        if(props.value.auteurId !== ''){
            const auteur = auteurs.filter(auteur => auteur.value === props.value.auteurId)
            setSelectedAuteur(auteur[0])
        }
    },[props.loading])
    useEffect(()=>{
        if(selectedAuteur !== null && selectedAuteur !== undefined) {
            props.setValue({...props.value, auteurId: selectedAuteur.value})
        }
    },[selectedAuteur])
    return (
        <div className="text-[#000000] w-[80%]">
            <Select className="rounded-xl h-[40px] w-[100%]" options={auteurs} value={selectedAuteur} onChange={setSelectedAuteur} />
        </div>
    );
}

export default LstAuteur;