import React, {useState} from 'react';
import Input from "../../form/input";
import {formHandleChange} from "../../../services/formServices";
import {getTomesGoogle} from "../../../api/tomeApi";
import LstSearch from "./lstSearch";
import DecriptTomeApi from "./decriptTomeApi";
import {addForTome} from "../../../interface/admin";

function AddApi(props:addForTome) {
    const [search, setSearch] = useState({name:''})
    const [searchData, setSearchData] = useState<any[]>([])
    const [uid,setUid] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, search,setSearch)
    }
    const getTomesInSearch = async()=>{
        setSearchData([])
        const data = await getTomesGoogle(search.name)
        setSearchData(data.items)
    }
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    return (
        <div className="w-[100%]">
            <div className="w-[100%] mt-6 pl-3 flex justify-around">
                <Input divClass={divClass} inputClass={inputClass} placeholder="nom de livre a rechercher" value={search.name} change={handleChange} label="Rechercher un livre" name="name" type="text"/>
                <button onClick={getTomesInSearch} className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Rechercher</button>
            </div>
            <LstSearch setUidValue={setUid} data={searchData}/>
            <DecriptTomeApi editionId={props.editionId} uid={uid}/>
        </div>
    );
}

export default AddApi;