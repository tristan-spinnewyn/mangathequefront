import React from 'react';
import {AdminElemTable} from "../../interface/admin";
import {Link} from "react-router-dom";

function ElemTable(props: AdminElemTable) {
    return (
        <tr className="h-[40px]">
            <td className="pl-6 w-[70%]">{props.name}</td>
            <td><Link to={props.link}><button className="w-[300px] h-[30px] bg-[#db4a2b] rounded-xl">Modifier</button></Link></td>
        </tr>
    );
}

export default ElemTable;