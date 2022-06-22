import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {formHandleChange} from "../../../services/formServices";
import Input from "../../../components/form/input";
import {addSerie, getSerieById, updateSerie} from "../../../api/serieApi";
import LstAuteur from "../../../components/form/lstAuteur";
import EditionComponent from "../../../components/admin/editionComponent";

function AddOrUpdateSerie() {
    const [serie, setSerie] = useState({id: null, nameSerie: '', auteurId: ''})
    const [editions, setEdition] = useState<any>([])
    let {id} = useParams()
    const [loading,setLoading] = useState(true)
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    let navigate = useNavigate();

    const getSerie = async () => {
        if (id) {
            const serie = await getSerieById(id)
            setSerie({id: serie.id, nameSerie: serie.nameSeries, auteurId: serie.auteur.id})
            setEdition(serie.editions)
        }
        setLoading(false)
    }
    useEffect(() => {
        if (id) {
            getSerie()
        }

    }, [])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, serie, setSerie)
    }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (id) {
            await updateSerie({id: id, nameSeries: serie.nameSerie, auteurId: serie.auteurId})
        } else {
            await addSerie({nameSeries: serie.nameSerie, auteurId: serie.auteurId})
        }
        return navigate("/admin/serie")
    }
    return (
        <div className="w-[100%] flex flex-col items-center">
            <h1 className="text-xl text-white">{serie.nameSerie !== '' ? serie.nameSerie : `Ajout d'un auteur !`}</h1>
            <form onSubmit={handleSubmit} className="w-[100%] pl-5 pr-5">
                <div className="flex w-[100%] flex-col">
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="Nom de la série"
                           placeholder="Nom de la série" value={serie.nameSerie} change={handleChange}
                           name="nameSerie"/>
                    <LstAuteur value={serie} setValue={setSerie} loading={loading}/>
                    <button className="w-[250px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                </div>
            </form>
            {serie.id ? <EditionComponent serieId={serie.id} editions={editions} getSerie={getSerie}/>
                : ''}
        </div>
    );
}

export default AddOrUpdateSerie;