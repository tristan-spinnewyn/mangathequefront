import React from 'react'
import {Link} from 'react-router-dom'
import {MenuLi} from "../../interface/header/headerInterface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MenuLiEl(props: MenuLi){
    return(
        <li><Link className="flex" to={props.url}><FontAwesomeIcon color="white" icon={[props.prefix,props.icon]} /> <p className="hidden lg:block">{props.name}</p></Link></li>
    )
}

export default MenuLiEl;