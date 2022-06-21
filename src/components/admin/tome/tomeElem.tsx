import React from 'react';
import {tomeElem} from "../../../interface/admin";
import {Link} from "react-router-dom";

function TomeElem(props:tomeElem) {
    return (
        <Link to={`/admin/tome/${props.data.id}`} className="m-2">
            <div className="min-w-[150px] max-w-[150px] min-h-[250px] max-h-[250px]">
                <img src={props.data.imageCouverture} height="250px" width="150px"/>
            </div>
            <p className="text-center text-white">TOME {props.data.numero}</p>
        </Link>
    );
}

export default TomeElem;