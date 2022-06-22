import React, { useState} from 'react';
import Header from "../../../components/admin/header";
import SearchAndAdd from "../../../components/admin/searchAndAdd";
import ContentTable from "../../../components/admin/contentTable";

function Editeur() {
    const [search,setSearch] = useState({name:''})
    return (
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <Header isEditor={true}/>
            <SearchAndAdd search={search} setSearch={setSearch} link="/admin/editeur/add"/>
            <ContentTable search={search} isEditor={true}/>
        </div>
    );
}

export default Editeur;