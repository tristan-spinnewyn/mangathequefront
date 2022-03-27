import React from "react";
import {ArrayMenuLi, MenuLi as MenuLiInterface} from "../../interface/header/headerInterface";
import MenuLiEl from "./menuLi";

function MenuUl(props: ArrayMenuLi){
    return(
        <ul className="text-[#FFFFFF] flex flex-col text-2xl mb-[20px]">
            {props.lstMenuLi.map((data: MenuLiInterface, index : number) => {
                return <MenuLiEl key={index} url={data.url} name={data.name}/>
            })}
        </ul>
    )
}

export default MenuUl;