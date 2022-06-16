import React from 'react';
import {Link} from "react-router-dom";
import {HeaderAdminInterface} from "../../interface/admin";

function Header(props: HeaderAdminInterface) {
    return (
        <div className="flex justify-between w-[900px] h-[40px] bg-[#444447] mt-[1em] rounded-xl">
            <Link to="/admin/serie"><button className={`w-[300px] h-[40px] rounded-xl ${props.isSerie ? 'bg-[#db4b2a]' : ''}`}>Série</button></Link>
            <Link to="/admin/auteur"><button className={`w-[300px] h-[40px] rounded-xl ${props.isAuthor ? 'bg-[#db4b2a]' : ''}`}>Auteur</button></Link>
            <Link to="/admin/editeur"><button className={`w-[300px] h-[40px] rounded-xl ${props.isEditor ? 'bg-[#db4b2a]' : ''}`}>Editeur</button></Link>
        </div>
    );
}

export default Header;