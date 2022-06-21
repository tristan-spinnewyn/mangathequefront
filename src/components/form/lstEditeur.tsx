import React, {useEffect, useState} from 'react';
import {getAuthor} from "../../api/authorApi";
import Select from "react-select";
import {select} from "../../interface/admin";
import {getEditor} from "../../api/editorApi";

function LstEditeur(props: select) {
    const [editeurs,setEditeurs] = useState<any[]>([])
    const [selectedEditeur,setSelectedEditeur] = useState<any>(null)
    const getEditeur = async()=>{
        setEditeurs([])
        const lstEditeur = await getEditor('')
        for(let i =0; i <lstEditeur.length; i++){
            setEditeurs(prevSate => [...prevSate, {value: lstEditeur[i].id,label:lstEditeur[i].nameEditeur}])
        }
    }
    useEffect(()=>{
        getEditeur()
        setSelectedEditeur(null)
        if(props.value.editeurId !== ''){
            const editeur = editeurs.filter(editeur => editeur.value === props.value.editeurId)
            setSelectedEditeur(editeur[0])
        }
    },[props.loading])
    useEffect(()=>{
        if(selectedEditeur !== null && selectedEditeur !== undefined) {
            props.setValue({...props.value, editeurId: selectedEditeur.value})
        }
    },[selectedEditeur])
    return (
        <div className="text-[#000000] w-[80%]">
            <Select className="rounded-xl h-[40px] w-[100%]" options={editeurs} value={selectedEditeur} onChange={setSelectedEditeur} />
        </div>
    );
}

export default LstEditeur;