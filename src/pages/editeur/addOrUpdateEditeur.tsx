import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {formHandleChange} from "../../services/formServices";
import Input from "../../components/form/input";
import {addEditeur, getEditeurById, updateEditeur} from "../../api/editorApi";

function AddOrUpdateEditeur() {
    const [editeur, setEditeur] = useState({id: null, nameEditeur: ''})
    let {id} = useParams()
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    let navigate = useNavigate();
    const getEditeur = async () => {
        if (id) {
            const editeur = await getEditeurById(id)
            console.log(editeur)
            setEditeur({id: editeur.id, nameEditeur: editeur.nameEditeur})
        }
    }
    useEffect(() => {
        if (id) {
            getEditeur()
        }
    }, [])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, editeur, setEditeur)
    }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (id) {
            await updateEditeur({id: id, nameEditeur: editeur.nameEditeur})
        } else {
            await addEditeur({nameEditeur: editeur.nameEditeur})
        }
        return navigate("/admin/editeur")
    }
    return (
        <div className="w-[100%] flex flex-col items-center">
            <h1 className="text-xl text-white">{editeur.nameEditeur !== '' ? editeur.nameEditeur : `Ajout d'un auteur !`}</h1>
            <form onSubmit={handleSubmit} className="w-[100%] pl-5 pr-5">
                <div className="flex w-[100%] justify-between">
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="Nom de l'auteur"
                           placeholder="Nom d' l'auteur" value={editeur.nameEditeur} change={handleChange}
                           name="nameEditeur"/>
                    <button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                </div>
            </form>
        </div>
    );
}

export default AddOrUpdateEditeur;