import React from 'react'
import {InputInterface} from "../../interface/form/formInterface";

function Input(props: InputInterface) {
    return (
        <div className={props.divClass}>
            <input className={props.inputClass} onChange={props.change} value={props.value} name={props.name} type={props.type}  id={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default Input;
