import {ArrayMenuLi} from "../../interface/header/headerInterface";
import React from "react";
import MenuUl from "./menuUl";

function MenuGroup(props: ArrayMenuLi){
    return(
        <div className="items-center flex flex-col">
            <MenuUl lstMenuLi={props.lstMenuLi} />
        </div>
    )
}

export default MenuGroup;