import React, {useEffect, useState} from 'react';
import {updateEdition} from "../../interface/admin";
import Input from "../form/input";
import SelectStatutEdition from "../form/selectStatutEdition";
import LstEditeur from "../form/lstEditeur";
import {formHandleChange} from "../../services/formServices";
import {updateEditionApi} from "../../api/editionApi";

function UpdateEdition(props: updateEdition) {
    const [edition,setEdition] = useState({id:props.id,nameEdition: props.nameEdition, statut:parseInt(props.statut.toString()), editeurId:props.editeurId, serieId:props.serieId})
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    const handleSubmit = async(event: React.SyntheticEvent)=>{
        event.preventDefault()
        await updateEditionApi({id:edition.id,nameEdition:edition.nameEdition,statut:parseInt(edition.statut.toString()),editeurId:edition.editeurId,serieId:edition.serieId})
    }
    useEffect(()=>{
        setEdition({id:props.id,nameEdition: props.nameEdition, statut:parseInt(props.statut.toString()), editeurId:props.editeurId, serieId:props.serieId})
    },[props.nameEdition])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, edition, setEdition)
    }
    return (
        <div className="w-[100%] flex flex-col ml-5 mt-[5rem]">
            <h2 className="text-xl text-white text-center">Edition</h2>
            <form onSubmit={handleSubmit}>
                <Input divClass={divClass} inputClass={inputClass} type="text" label="Nom de l'édition" placeholder="Nom de l'édition" value={edition.nameEdition} change={handleChange} name="nameEdition"/>
                <SelectStatutEdition value={edition} setValue={setEdition} loading={props.loading}/>
                <LstEditeur value={edition} setValue={setEdition} loading={props.loading}/>
                <button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Modifier</button>
            </form>
        </div>
    );
}

export default UpdateEdition;