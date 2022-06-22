import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import SwitchComponent from "../../../components/admin/tome/switchComponent";
import AddApi from "../../../components/admin/tome/addApi";
import {getEditionApi} from "../../../api/editionApi";
import DecriptTomeApi from "../../../components/admin/tome/decriptTomeApi";

function AddTome() {
    let {id} = useParams()
    const [edition,setEdition] = useState({nameSerie:'',nameEdition:''})
    const [tome,setTome] = useState({numero:0,desc:'',nbpage:0,dateSortie:new Date(),imageCouverture:'',isbn:'',editionId:id})
    useEffect(()=>{
        getEdition()
    },[])
    const [isApi,setIsApi] = useState(true)
    const [isManuel, setIsManuel] = useState(false)
    const getEdition = async()=>{
        if(id !== undefined) {
            const editionApi = await getEditionApi(id)
            setEdition({nameEdition: editionApi[0].nameEdition, nameSerie: editionApi[0].serie.nameSeries})
        }
    }
    let navigate = useNavigate()
    return (
        <div className="flex w-[100%] flex-col items-center text-white">
            <SwitchComponent isApi={isApi} setIsApi={setIsApi} isManuel={isManuel} setIsManuel={setIsManuel} />
            <div className="w-[100%]">
                <p className="ml-5">Série : {edition.nameSerie}</p>
                <p className="ml-5">Edition: {edition.nameEdition}</p>
            </div>
            {isApi ? <AddApi editionId={id ? id :''}/> : <DecriptTomeApi uid="" editionId={id? id: ''}/>}
        </div>
    );
}

export default AddTome;