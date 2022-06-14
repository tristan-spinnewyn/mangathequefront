import React, {useEffect, useState} from 'react';
import Input from "../form/input";
import {formHandleChange} from "../../services/formServices";
import {getConnectedUser, updateConnectedUser} from "../../api/userApi";
import {UserInterface} from "../../interface/classesInterface";

function Info(props: UserInterface) {
    const [user, setUser] = useState({email: '', pseudonyme:'', pwd:''})
    const [error,setError] = useState("")
    const [event, setEvent] = useState("")
    let inputClass = "rounded-xl h-[40px] w-[300px]"
    let divClass = "text-[#000000] w-[300px]"

    // @ts-ignore
    useEffect(async () => {
        setUser({email: props.email, pseudonyme: props.pseudonyme ? props.pseudonyme: '',pwd:''})
    },[props])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event,user,setUser)
    }
    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault()
        setError("")
        setEvent("")
        if(user.email === '' ||user.pwd === '' || user.pseudonyme === ''){
            setError("Veuillez remplir tout les champs du formulaire !")
            return
        }
        try{
            await updateConnectedUser({email: user.email,pseudonyme: user.pseudonyme, currentPassword: user.pwd})
            setUser({...user,pwd:''})
            setEvent("Changement validé !")
        }catch (e) {
            setError("Une erreur est survenu, veuillez vérifier votre mot de passe !")
        }
    }
    return (
        <div className="flex flex-col justify-center h-full w-full items-center">
            <h1 className="text-xl">Mon compte</h1>
            <form onSubmit={handleSubmit}>
                <Input divClass={divClass} inputClass={inputClass} type="text" label="Email" placeholder="Email" value={user.email} change={handleChange} name="email"/>
                <Input divClass={divClass} inputClass={inputClass} type="text" label="Pseudonyme" placeholder="Pseudonyme" value={user.pseudonyme} change={handleChange} name="pseudonyme" />
                <Input divClass={divClass} inputClass={inputClass} type="password" label="Mot de passe" placeholder="Mot de passe" value={user.pwd} change={handleChange} name="pwd" />
                <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                <p className="text-red-600">{error}</p>
                <p className="text-green-600">{event}</p>
            </form>
        </div>
    );
}

export default Info;