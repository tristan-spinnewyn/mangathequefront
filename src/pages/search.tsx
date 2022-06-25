import React, {useState} from 'react';
import SearchBar from "../components/search/searchBar";
import ChoiceSearch from "../components/search/choiceSearch";
import SearchTable from "../components/search/searchTable";

function Search() {
    const [search,setSearch] = useState({name:""})
    const [whatIs,setWhatIs] = useState({isSerie:true,isEditeur:false,isAuthor:false})
    return (
        <div className="w-[100%]">
            <div className="w-[100%] lg:flex">
                <SearchBar search={search} setSearch={setSearch}/>
                <ChoiceSearch whatIs={whatIs} setWhatIs={setWhatIs}/>
            </div>
            <SearchTable whatIs={whatIs} search={search}/>
        </div>
    );
}

export default Search;