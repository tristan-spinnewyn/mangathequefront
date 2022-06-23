import React from 'react';
import {avis} from "../../interface/tomeInterface";
import {signaleeAvis} from "../../api/avis";

function AvisComponent(props:avis) {
    const signalee = async()=>{
        if(window.confirm("Etes vous sur de vouloir signaler cette avis ?")){
            await signaleeAvis(props.avis.id)
            props.setSignalee(!props.signalee)
        }
    }
    return (
        <div className="border-white pb-5">
            <p>Posté par : {props.avis.user.pseudonyme}</p>
            <p style={{whiteSpace: "pre-wrap"}}>{props.avis.commantaire}</p>
            <button onClick={signalee} className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Signaler</button>
        </div>
    );
}

export default AvisComponent;