import React, {useEffect, useState} from 'react';
import Info from "../components/account/info";
import Password from "../components/account/password";
import {getConnectedUser} from "../api/userApi";

function Account() {
    const [user, setUser] = useState({email: '', pseudonyme:'', pwd:''})

    useEffect(() => {
        try {
            const userInfo = async  ()=> {
                const user = await getConnectedUser()
                setUser({email: user.email, pseudonyme: user.pseudonyme, pwd: ''})
            };
            userInfo()

        } catch (e) {
            console.log('error')
        }
    },[])
    return (
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <Info email={user.email} pseudonyme={user.pseudonyme} password={user.pwd}/>
            <Password email={user.email} pseudonyme={user.pseudonyme} password={user.pwd}/>
        </div>
    );
}

export default Account;