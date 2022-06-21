import React from 'react';
import {lstTome} from "../../../interface/admin";
import TomeElem from "./tomeElem";

function LstTome(props:lstTome) {
    return (
        <div className="m-5 flex">
            {props.data.map((data,index)=>{
                return <TomeElem data={data} key={index}/>
            })}
        </div>
    );
}

export default LstTome;