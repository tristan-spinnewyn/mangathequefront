import React, {useEffect, useState} from 'react';
import {lstEdition} from "../../interface/admin";
import AddEdition from "./addEdition";
import ContentTable from "./contentTable";

function EditionComponent(props: lstEdition) {
    const [edition,setEdition] = useState<any[]>([])
    useEffect(()=>{
        setEdition([])
        for(let i = 0; i< props.editions.length;i++){
            setEdition(prevState => [...prevState, {link:`/admin/edition/${props.editions[i].id}`,name:props.editions[i].nameEdition}])
        }
        console.log(edition)
    },[props.editions])
    return (
        <div className="w-[90%]">
            <AddEdition getSerie={props.getSerie} serieId={props.serieId}/>
            <ContentTable search={edition} isNotApi={true} table={edition}/>
        </div>
    );
}

export default EditionComponent;