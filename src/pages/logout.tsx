import React, {useContext, useEffect} from "react";
import {logout} from "../services/authService";
import {AuthContext} from "../App";

function Logout() {
    const context = useContext(AuthContext)
    useEffect(() => {
        context.setConnected(false)
        logout()
        console.log("disconnected")
        document.location.href = '/'

    }, []);
    return(<div></div>)
}
export default Logout;