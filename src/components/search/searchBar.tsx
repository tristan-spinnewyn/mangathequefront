import React from 'react';
import {searchBar} from "../../interface/searchBar";
import Input from "../form/input";
import {formHandleChange} from "../../services/formServices";

function SearchBar(props:searchBar) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, props.search,props.setSearch)
    }
    let divClass = "text-[#000000] w-[100%] lg:w-[70%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    return (
        <Input divClass={divClass} inputClass={inputClass} type="text" label="Rechercher" placeholder="rechercher" value={props.search.name} change={handleChange} name="name"/>
    );
}

export default SearchBar;