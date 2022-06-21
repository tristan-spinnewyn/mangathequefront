import React from 'react';
import {lstSearch} from "../../../interface/admin";
import ElemSearch from "./elemSearch";

function LstSearch(props:lstSearch) {
    return (
        <div>
            {props.data.map((value,index )=> {
                return <ElemSearch key={index} name={value.volumeInfo.title} uid={value.id} setUidValue={props.setUidValue} />
            })}
        </div>
    );
}

export default LstSearch;