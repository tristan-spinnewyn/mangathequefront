import React from 'react'
import {Link} from 'react-router-dom'
import {MenuLi} from "../../interface/header/headerInterface";


function MenuLiEl(props: MenuLi){
    return(
        <li><Link to={props.url}>{props.name}</Link></li>
    )
}

export default MenuLiEl;