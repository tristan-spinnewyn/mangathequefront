import React from 'react';
import {Link} from "react-router-dom";
import {choiceSearch} from "../../interface/searchBar";

function ChoiceSearch(props:choiceSearch) {
    const setWhatIs = (what:string)=>{
        if(what === 'serie'){
            props.setWhatIs({isSerie:true,isAuthor:false, isEditor:false})
        }
        if(what === 'author'){
            props.setWhatIs({isSerie:false,isAuthor:true, isEditor:false})
        }
        if(what === 'editor'){
            props.setWhatIs({isSerie:false,isAuthor:false, isEditor:true})
        }
    }
    return (
        <div className="flex justify-between w-[100%] lg:w-[30%] h-[40px] bg-[#444447] rounded-xl text-center self-center">
            <button onClick={()=>{setWhatIs('serie')}} className={`w-[30%] h-[40px] rounded-xl ${props.whatIs.isSerie ? 'bg-[#db4b2a]' : ''}`}>Série</button>
            <button onClick={()=>{setWhatIs('author')}} className={`w-[30%] h-[40px] rounded-xl ${props.whatIs.isAuthor ? 'bg-[#db4b2a]' : ''}`}>Auteur</button>
            <button onClick={()=>{setWhatIs('editor')}} className={`w-[30%] h-[40px] rounded-xl ${props.whatIs.isEditor ? 'bg-[#db4b2a]' : ''}`}>Editeur</button>
        </div>
    );
}

export default ChoiceSearch;