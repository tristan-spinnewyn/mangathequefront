import React, {useEffect, useState} from 'react';
import {descriptApi} from "../../../interface/admin";
import {addATome, getTomeGoogle} from "../../../api/tomeApi";
import Input from "../../form/input";
import {formHandleChange} from "../../../services/formServices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom";

function DecriptTomeApi(props: descriptApi) {
    const [data, setData] = useState({desc:'',nbpage:0,dateSortie:new Date(),imageCouverture:'',isbn:'',numero:0,editionId:props.editionId})
    let navigate = useNavigate()
    const getTomeApi = async()=>{
        const getData = await getTomeGoogle(props.uid)
        let imgUri = ''
        if(getData.volumeInfo.imageLinks){
            imgUri = getData.volumeInfo.imageLinks.thumbnail
        }else{
            imgUri = ""
        }
        setData({desc: getData.volumeInfo.description,nbpage: getData.volumeInfo.pageCount,dateSortie: new Date(getData.volumeInfo.publishedDate),imageCouverture: imgUri,isbn: getData.volumeInfo.industryIdentifiers[1].identifier, numero: 0,editionId:props.editionId})
    }
    useEffect(()=>{
        if(props.uid !== '') {
            getTomeApi()
        }
    },[props.uid])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formHandleChange(event, data, setData)
    }
    const handleSubmit = async(event: React.SyntheticEvent) =>{
        event.preventDefault()
        if(data.desc == '' || data.nbpage == 0 || data.isbn == '' || data.imageCouverture == '' || data.numero == 0 || data.dateSortie == null){
            alert('Veuillez remplir tout les champs')
            return;
        }
        await addATome(data);
        return navigate(`/admin/edition/${props.editionId}`)
    }
    const handleChangeText = (event: any)=>{
        setData({...data,desc: event.target.value})
    }
    let divClass = "text-[#000000] w-[80%]"
    let inputClass = "rounded-xl h-[40px] w-[100%]"
    return (
        <div className="pl-5 mt-10 flex-col w-[100%] justify-center">
            <h2 className="text-center">Formulaire d'ajout</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">ISBN:</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="ISBN" placeholder="ISBN" value={data.isbn} change={handleChange} name="isbn"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Numéro:</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="numéro" placeholder="numéro" value={data.numero.toString()} change={handleChange} name="numero"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Description</p>
                    <textarea onChange={handleChangeText} className="text-[#000000] w-[80%]" name="desc" value={data.desc}></textarea>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">nombre de page</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="nombre de page" placeholder="Nombre de page" value={data.nbpage.toString()} change={handleChange} name="nbpage"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Lien vers l'image de couverture</p>
                    <Input divClass={divClass} inputClass={inputClass} type="text" label="image de couverture" placeholder="Image de couverture" value={data.imageCouverture} change={handleChange} name="imageCouverture"/>
                </div>
                <div className="flex w-[100%] mt-3 justify-center items-center">
                    <p className="w-[10%]">Date de sortie</p>
                    <DatePicker className="text-[#000000] w-[80%] rounded-xl h-[40px]" selected={data.dateSortie} onChange={(date:Date)=> setData({...data,dateSortie: date})} />
                </div>
                <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
            </form>
        </div>
    );
}

export default DecriptTomeApi;