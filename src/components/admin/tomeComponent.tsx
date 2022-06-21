import React from 'react';
import {tomeComponent} from "../../interface/admin";
import {Link} from "react-router-dom";
import LstTome from "./tome/lstTome";

function TomeComponent(props:tomeComponent) {
    return (
        <div>
            <h2 className="text-xl text-white text-center">Listes des tomes</h2>
            <Link to={`/admin/tome/${props.editionId}/add`}><button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl ml-5">Ajouter un tome</button></Link>
            <LstTome data={props.tomes}/>
        </div>
    );
}

export default TomeComponent;