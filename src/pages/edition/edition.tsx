import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UpdateEdition from "../../components/admin/updateEdition";
import {getEditionApi} from "../../api/editionApi";
import TomeComponent from "../../components/admin/tomeComponent";

function Edition() {
    let {id} = useParams()
    const [edition,setEdition] = useState({id:'', nameEdition: '', statut: 2, editeur:{id:1,nameEditeur:''},serie:{id:'',nameSerie:''},tomes:[]})
    const [loading,setLoading] = useState(false)
    const getEdition = async()=>{
        if(id !== undefined) {
            const editionApi = await getEditionApi(id)
            setEdition({id:editionApi[0].id,nameEdition: editionApi[0].nameEdition, statut: editionApi[0].statut,
                editeur: {id:editionApi[0].editeur.id, nameEditeur: editionApi[0].editeur.nameEditeur},
                serie: {id:editionApi[0].serie.id,nameSerie: editionApi[0].serie.nameSerie}, tomes: editionApi[0].tomes})
            setLoading(!loading)
        }
    }
    useEffect(()=>{
        getEdition()
    },[])

    return (
        <div className="w-[80%]">
            <UpdateEdition id={edition.id} nameEdition={edition.nameEdition} serieId={edition.serie.id} editeurId={edition.editeur.id} statut={edition.statut} loading={loading}/>
            <TomeComponent editionId={edition.id} tomes={edition.tomes}/>
        </div>
    );
}

export default Edition;