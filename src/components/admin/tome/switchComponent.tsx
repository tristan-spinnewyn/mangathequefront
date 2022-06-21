import React from 'react';
import {Link} from "react-router-dom";
import {switchComponent} from "../../../interface/admin";

function SwitchComponent(props: switchComponent) {
    const handleChange = ()=>{
        props.setIsApi(!props.isApi)
        props.setIsManuel(!props.isManuel)
    }
    return (
        <div className="flex justify-between w-[700px] h-[40px] bg-[#444447] mt-[1em] rounded-xl">
            <button onClick={handleChange} className={`w-[340px] h-[40px] rounded-xl ${props.isApi ? 'bg-[#db4b2a]' : ''}`}>API</button>
            <button onClick={handleChange} className={`w-[340px] h-[40px] rounded-xl ${props.isManuel ? 'bg-[#db4b2a]' : ''}`}>Manuelle</button>
        </div>
    );
}

export default SwitchComponent;