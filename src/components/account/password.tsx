import React, {useEffect, useState} from 'react';
import Input from "../form/input";
import {formHandleChange} from "../../services/formServices";
import {updateConnectedUser, updatePasswordConnectedUser} from "../../api/userApi";
import {UserInterface} from "../../interface/classesInterface";

function Password(props: UserInterface) {
    const [password, setPassword] = useState({password: '', confirmPassword:'', pwd:'', email:'', pseudonyme: ''})
    const [error,setError] = useState("")
    const [event, setEvent] = useState("")
    let inputClass = "rounded-xl h-[40px] w-[300px]"
    let divClass = "text-[#000000] w-[300px]"

    // @ts-ignore
    useEffect(async () => {
        setPassword({password: '', confirmPassword: '',email: props.email, pseudonyme: props.pseudonyme ? props.pseudonyme: '',pwd:''})
    },[props])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event,password,setPassword)
    }
    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault()
        setError("")
        setEvent("")
        if(password.password === '' ||password.pwd === '' || password.confirmPassword === ''){
            setError("Veuillez remplir tout les champs du formulaire !")
            return
        }
        if(password.password !== password.confirmPassword){
            setError("Les deux mots de passe doivent être identique !")
            return
        }
        try{
            await updatePasswordConnectedUser({password: password.password,changePassword: true, currentPassword: password.pwd, email:password.email, pseudonyme: password.pseudonyme})
            setPassword({password: '',confirmPassword: '',pwd: '', email: password.email, pseudonyme: password.pseudonyme})
            setEvent("Changement validé !")
        }catch (e) {
            setError("Une erreur est survenu, veuillez vérifier votre mot de passe !")
        }
    }

    return (
        <div className="flex flex-col justify-center h-full w-full items-center">
            <h1 className="text-xl">Changement de mot de passe</h1>
            <form onSubmit={handleSubmit}>
                <Input divClass={divClass} inputClass={inputClass} type="password" label="Nouveau mot de passe" placeholder="Nouveau mot de passe" value={password.password} change={handleChange} name="password"/>
                <Input divClass={divClass} inputClass={inputClass} type="password" label="Confirmer le nouveau mot de passe" placeholder="Confirmer le nouveau mot de passe" value={password.confirmPassword} change={handleChange} name="confirmPassword"/>
                <Input divClass={divClass} inputClass={inputClass} type="password" label="Mot de passe" placeholder="Mot de passe" value={password.pwd} change={handleChange} name="pwd" />
                <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                <p className="text-red-600">{error}</p>
                <p className="text-green-600">{event}</p>
            </form>
        </div>
    );
}

export default Password;