import React from 'react';
import {elemSearch} from "../../../interface/admin";

function ElemSearch(props:elemSearch) {
    const setUId = (uid:string)=>{
        props.setUidValue(uid)
    }
    return (
        <div className="w-[100%] mt-6 pl-3 flex justify-around">
            <p className="w-[70%]">{props.name}</p>
            <button onClick={()=>setUId(props.uid)} className="w-[250px] h-[25px] bg-[#db4a2b] rounded-xl">Sélectionner</button>
        </div>
    );
}

export default ElemSearch;