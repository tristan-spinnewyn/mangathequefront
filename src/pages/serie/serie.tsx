import React, {useState} from 'react';
import Header from "../../components/admin/header";
import SearchAndAdd from "../../components/admin/searchAndAdd";
import ContentTable from "../../components/admin/contentTable";
import AddEdition from "../../components/admin/addEdition";

function Serie() {
    const [search,setSearch] = useState({name:''})
    return (
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <Header isSerie={true}/>
            <SearchAndAdd search={search} setSearch={setSearch} link="/admin/serie/add"/>
            <ContentTable search={search} isSerie={true}/>
        </div>
    );
}

export default Serie;