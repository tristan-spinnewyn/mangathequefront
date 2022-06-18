import React, {useState} from 'react';
import SelectStatutEdition from "../form/selectStatutEdition";
import Input from "../form/input";
import {formHandleChange} from "../../services/formServices";
import LstEditeur from "../form/lstEditeur";
import {addEdition} from "../../interface/admin";
import {addEditionApi} from "../../api/editionApi";

function AddEdition(props: addEdition) {
    const [edition,setEdition] = useState({nameEdition: '', statut:1, editeurId:'', serieId:props.serieId})
    const [loading,setLoading] = useState(true)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, edition, setEdition)
    }
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    const handleSubmit = async (event: React.SyntheticEvent)=>{
        event.preventDefault()
        await addEditionApi({nameEdition:edition.nameEdition,statut:edition.statut,editeurId:edition.editeurId,serieId:edition.serieId})
        props.getSerie();
        setEdition({nameEdition: '', statut:1, editeurId:'', serieId:props.serieId})
        setLoading(!loading)
    }
    return (
        <div className="w-[100%] flex flex-col ml-5 mt-[5rem]">
            <h2 className="text-xl text-white text-center">Editions</h2>
            <form onSubmit={handleSubmit}>
                <Input divClass={divClass} inputClass={inputClass} type="text" label="Nom de l'édition" placeholder="Nom de l'édition" value={edition.nameEdition} change={handleChange} name="nameEdition"/>
                <SelectStatutEdition value={edition} setValue={setEdition} loading={loading}/>
                <LstEditeur value={edition} setValue={setEdition} loading={loading}/>
                <button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Ajouter l'édition</button>
            </form>
        </div>
    );
}

export default AddEdition;