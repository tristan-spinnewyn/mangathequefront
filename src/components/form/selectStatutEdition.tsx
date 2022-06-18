import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {optionsStatutEdition} from "../../interface/variable";
import {select} from "../../interface/admin";

function SelectStatutEdition(props:select) {
    const [selectedStatut,setSelectedStatut] = useState<any>(null)
    useEffect(()=>{
        if(props.value.statut !== ''){
            const statut = optionsStatutEdition.filter(statut => statut.value === props.value.statut)
            setSelectedStatut(statut[0])
        }
    },[props.loading])
    return (
        <div className="text-[#000000] w-[80%]">
            <Select className="rounded-xl h-[40px] w-[100%]" options={optionsStatutEdition} value={selectedStatut} onChange={setSelectedStatut} />
        </div>
    );
}

export default SelectStatutEdition;