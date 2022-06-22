import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {addATome, getTomeApi, updateTomeApi} from "../../../api/tomeApi";
import Input from "../../../components/form/input";
import DatePicker from "react-datepicker";
import {formHandleChange} from "../../../services/formServices";

function UpdateTome() {
    let {id} = useParams()
    const [tome,setTome] = useState({id:'',numero:'',desc:'',nbpage:'',dateSortie:new Date(),imageCouverture:'',isbn:'',editionId:''})
    const [info,setInfo] = useState({nomSerie:'',nomEdition:''})
    const getTome = async()=>{
        if(id) {
            const data = await getTomeApi(id)
            console.log(data[0])
            setTome({id:data[0].id,numero: data[0].numero,desc:data[0].desc,nbpage: data[0].nbpage,dateSortie: new Date(data[0].dateSortie),imageCouverture: data[0].imageCouverture,isbn: data[0].isbn,editionId: data[0].edition.id})
            setInfo({nomEdition: data[0].edition.nameEdition,nomSerie: data[0].edition.serie.nameSeries})
        }
    }
    useEffect(()=>{
        getTome()
    },[null])
    let navigate = useNavigate()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, tome, setTome)
    }
    const handleSubmit = async(event: React.SyntheticEvent) =>{
        event.preventDefault()
        if(tome.desc === '' || tome.nbpage === '0' || tome.isbn === '' || tome.imageCouverture === '' || tome.numero === '0' || tome.dateSortie === null){
            alert('Veuillez remplir tout les champs')
            return;
        }
        await updateTomeApi(tome,tome.id);
        return navigate(`/admin/edition/${tome.editionId}`)
    }
    const handleChangeText = (event: any)=>{
        setTome({...tome,desc: event.target.value})
    }
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    return (
        <div className="text-white flex-col w-[100%]">
            <h1 className="text-5xl text-center w-[100%]">{info.nomSerie} - Tome {tome.numero}</h1>
            <div className="w-[100%]">
                <p className="ml-5">Série : {info.nomSerie}</p>
                <p className="ml-5">Edition: {info.nomEdition}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">ISBN:</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="ISBN" placeholder="ISBN" value={tome.isbn} change={handleChange} name="ISBN"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Numéro:</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="numéro" placeholder="numéro" value={tome.numero.toString()} change={handleChange} name="numero"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Description</p>
                    <textarea onChange={handleChangeText} className="text-[#000000] w-[80%]" name="desc" value={tome.desc}></textarea>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">nombre de page</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="nombre de page" placeholder="Nombre de page" value={tome.nbpage.toString()} change={handleChange} name="nbpage"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Lien vers l'image de couverture</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="image de couverture" placeholder="Image de couverture" value={tome.imageCouverture} change={handleChange} name="imageCouverture"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Date de sortie</p>
                    <DatePicker className="text-[#000000] w-[80%] rounded-xl h-[40px]" selected={tome.dateSortie} onChange={(date:Date)=> setTome({...tome,dateSortie: date})} />
                </div>
                <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
            </form>
        </div>
    );
}

export default UpdateTome;