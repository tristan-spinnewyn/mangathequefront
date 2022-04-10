import React, {useContext, useState} from "react";
import {formHandleChange} from "../services/formServices";
import Input from "../components/form/input";
import LogButtonTop from "../components/user/logButtonTop";
import { register} from "../api/userApi";


function Register(){
    const [login, setLogin] = useState({ email: '', pwd: '', pseudonyme:'' })
    const [passwordConf,setPasswordConf] = useState({passwordConf:''})
    const [error,setError] = useState("")
    let divClass = "text-[#000000] w-[300px]"
    let inputClass = "rounded-xl h-[40px] w-[300px]"


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event,login,setLogin)
    }

    const hangleChangeConf= (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event,passwordConf,setPasswordConf)
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        if(login.pwd === passwordConf.passwordConf) {
            try {
                await register({email: login.email, password: login.pwd, pseudonyme: login.pseudonyme})
                document.location.href = '/login'
            } catch (e) {
                setError("L'email existe deja.")
            }
        }else{
            setError("Les mots de passe ne sont pas conforme.")
        }
    }

    return(
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <LogButtonTop isRegister={true}/>
            <div className="flex flex-col justify-center h-full w-full items-center">
                <form onSubmit={handleSubmit}>
                    <Input divClass={divClass} inputClass={inputClass} name="pseudonyme" change={handleChange} type="text" placeholder="Pseudonyme" value={login.pseudonyme} label="pseudonyme" />
                    <Input divClass={divClass} inputClass={inputClass} name="email" change={handleChange} type="text" placeholder="Email" value={login.email} label="Email" />
                    <Input divClass={divClass} inputClass={inputClass} name="pwd" change={handleChange} type="password" placeholder="Mot de passe" value={login.pwd} label="Mot de passe" />
                    <Input divClass={divClass} inputClass={inputClass} name="passwordConf" change={hangleChangeConf} type="password" placeholder="Confirmer le mot de passe" value={passwordConf.passwordConf} label="Confirmer le mot de passe" />
                    <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Se connecter</button>
                    <p className="text-red-600">{error}</p>
                </form>
            </div>
        </div>
    )
}

export default Register;