import React from 'react';
import {tomeComponent} from "../../interface/home";
import {Link} from "react-router-dom";

function Tome(props:tomeComponent) {
    return (
        <Link to={`/tome/${props.tome.id}`} className="w-[50%] sm:w-[18%] p-3">
            <img src={props.tome.imageCouverture} />
            <p>{props.tome.serieName}</p>
            <p>Tome {props.tome.numero}</p>
        </Link>
    );
}

export default Tome;