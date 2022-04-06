import React, {useContext, useState} from "react";
import {AuthContext} from "../App";
import {formHandleChange} from "../services/formServices";
import Input from "../components/form/input";
import LogButtonTop from "../components/user/logButtonTop";
import {setUserLocalStorage} from "../services/authService";
import {authenticate} from "../api/userApi";


function Login(){
    const [login, setLogin] = useState({ email: '', pwd: '' })
    const context = useContext(AuthContext)
    let divClass = "text-[#000000] w-[300px]"
    let inputClass = "rounded-xl h-[40px] w-[300px]"

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event,login,setLogin)
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        try{
            const data = await authenticate({email: login.email,password:login.pwd})
            setUserLocalStorage(data)
            context.setConnected(true)
            document.location.href = '/'
        }catch(e){
            context.setConnected(false)

        }
    }

    return(
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <LogButtonTop isConnexion={true}/>
            <div className="flex flex-col justify-center h-full w-full items-center">
                <form onSubmit={handleSubmit}>
                    <Input divClass={divClass} inputClass={inputClass} name="email" change={handleChange} type="text" placeholder="Email" value={login.email} label="Email" />
                    <Input divClass={divClass} inputClass={inputClass} name="pwd" change={handleChange} type="password" placeholder="Mot de passe" value={login.pwd} label="Mot de passe" />
                    <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Se connecter</button>
                </form>
            </div>
        </div>
    )
}

export default Login;