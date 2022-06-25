import React, {useEffect, useState} from 'react';
import {addAuthor, getAuthorById, updateAuthor} from "../../../api/authorApi";
import {useNavigate, useParams} from "react-router-dom";
import Input from "../../../components/form/input";
import {formHandleChange} from "../../../services/formServices";

function AddOrUpdateAuthor() {
    const [author, setAuthor] = useState({id: null, nameAuteur: ''})
    let {id} = useParams()
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    let navigate = useNavigate()
    const getAuthor = async () => {
        if (id) {
            const author = await getAuthorById(id)
            setAuthor({id: author.id, nameAuteur: author.nameAuteur})
        }
    }
    useEffect(() => {
        if (id) {
            getAuthor()
        }
    }, [])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, author, setAuthor)
    }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (id) {
            await updateAuthor({id: id, nameAuteur: author.nameAuteur})
        } else {
            await addAuthor({nameAuteur: author.nameAuteur})
        }
        return navigate("/admin/auteur")
    }
    return (
        <div className="w-[100%] flex flex-col items-center">
            <h1 className="text-xl text-white">{author.nameAuteur !== '' ? author.nameAuteur : `Ajout d'un auteur !`}</h1>
            <form onSubmit={handleSubmit} className="w-[100%] pl-5 pr-5">
                <div className="flex w-[100%] justify-between">
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="Nom de l'auteur"
                           placeholder="Nom d' l'auteur" value={author.nameAuteur} change={handleChange}
                           name="nameAuteur"/>
                    <button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                </div>
            </form>
        </div>
    );
}

export default AddOrUpdateAuthor;