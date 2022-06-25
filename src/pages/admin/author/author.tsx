import React, { useState} from 'react';
import Header from "../../../components/admin/header";
import SearchAndAdd from "../../../components/admin/searchAndAdd";
import ContentTable from "../../../components/admin/contentTable";

function Author() {
    const [search,setSearch] = useState({name:''})
    return (
        <div className="text-white flex flex-col h-screen w-screen items-center">
            <Header isAuthor={true}/>
            <SearchAndAdd search={search} setSearch={setSearch} link="/admin/auteur/add"/>
            <ContentTable search={search} isAuthor={true}/>
        </div>
    );
}

export default Author;