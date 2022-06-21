import React from 'react';
import {AdminSearchInterface} from "../../interface/admin";
import Input from "../form/input";
import {formHandleChange} from "../../services/formServices";
import {Link} from "react-router-dom";

function SearchAndAdd(props: AdminSearchInterface) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, props.search,props.setSearch)
    }
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    return (
        <div className="w-[100%] mt-6 pl-3 flex justify-around">
            <Input divClass={divClass} inputClass={inputClass} type="text" label="Rechercher" placeholder="rechercher" value={props.search.name} change={handleChange} name="name"/>
            <Link to={props.link}><button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Ajouter</button></Link>
        </div>
    );
}

export default SearchAndAdd;