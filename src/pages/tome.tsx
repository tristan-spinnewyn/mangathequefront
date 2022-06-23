import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getTomeApi} from "../api/tomeApi";
import {addAvisApi} from "../api/avis";
import AvisComponent from "../components/tome/avisComponent";
import {sign} from "crypto";

function Tome() {
    const  {id} = useParams()
    const [tome,setTome] = useState<any>({id:'',numero:'',desc:'',nbpage:'',dateSortie:new Date(),imageCouverture:'',isbn:'',
        edition:{id:'',nameEdition:'',statut:'',serie:{id:'',nameSeries:''},
        avis:[{id:'',commantaire:'',signalee:'',user:{pseudonyme:''}}]}
    })
    const [signalee,setSignalee] = useState(true)
    const [avis,setAvis] = useState({tomeId:id,commantaire:''})
    const handleChange = (event:any)=>{
        setAvis({...avis,commantaire: event.target.value})
    }
    const addAvis = async(event: React.SyntheticEvent)=>{
        event.preventDefault()
        if(id) {
            await addAvisApi(avis)
            await getTome()
            setAvis({...avis,commantaire: ''})
        }
    }
    const getTome = async()=>{
        if(id){
            const data = await getTomeApi(id)
            data[0].avis.sort(function (a:any, b:any) {
                return b.id - a.id;
            })
            setTome(data[0])
        }
    }
    useEffect(()=>{
        getTome()
    },[signalee])
    return (
        <div className="text-white w-[100%]">
            <h1 className="text-5xl">{tome.edition.serie.nameSeries} - Tome n°{tome.numero}</h1>
            <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Ajouter le tome !</button>
            <div className="w-[100%] h-[50px] mt-10">
                <h2 className="text-2xl">Série</h2>
                <Link to={`/auteur/${tome.edition.serie.id}`}><div className="border-b border-gray-500 w-[100%] mt-3 h-[40px]">{tome.edition.serie.nameSeries}</div></Link>
            </div>
            <div className="w-[100%] h-[50px] mb-10 mt-10">
                <h2 className="text-2xl">Edition</h2>
                <Link to={`/auteur/${tome.edition.id}`}><div className="border-b border-gray-500 w-[100%] mt-3 h-[40px]">{tome.edition.nameEdition}</div></Link>
            </div>
            <div className="flex">
                <div className="w-[25%] flex justify-end">
                    <div>
                    <img src={tome.imageCouverture}/>
                    </div>
                </div>
                <div className="w-[75%]">
                    <p className="m-2">ISBN: {tome.isbn}</p>
                    <p className="m-2">Synopsis: {tome.desc}</p>
                    <p className="m-2">Date de sortie: {new Date(tome.dateSortie).toLocaleDateString()}</p>
                    <p className="m-2">Nombre de page: {tome.nbpage}</p>
                </div>
            </div>
            <div className="w-[100%]  pl-10 pr-10">
                <h2 className="w-[100%] text-center text-2xl">Avis</h2>
                <form onSubmit={addAvis} className="pb-10">
                    <textarea className="w-[100%] h-[100px] text-[#000000]" value={avis.commantaire} onChange={handleChange}></textarea>
                    <button className="w-[300px] h-[40px] bg-[#db4a2b] rounded-xl">Valider</button>
                </form>
                <div>
                    {tome.avis ? tome.avis.map((data:any,index:any)=>{
                        if(!data.signalee) {
                            return <AvisComponent setSignalee={setSignalee} signalee={signalee} avis={data} key={index}/>
                        }
                    }) : ''}
                </div>
            </div>
        </div>
    );
}

export default Tome;