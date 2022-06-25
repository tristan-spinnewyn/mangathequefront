import React, {useEffect, useState} from 'react';
import {getTomeUserApi} from "../api/tomeApi";
import {Link} from "react-router-dom";

function Collection() {
    const [edition,setEdition] = useState<any>([{id:'',nameEdition:'',nbtome:0,nbtomeshas:0,nameSerie:''}])
    const getTomes = async ()=>{
        const data = await getTomeUserApi()
        let editions:any[] = []
        for(let i =0;data.length > i;i++){
            let obj = editions.find((o: { id: any; }) => o.id === data[i].tome.edition.id)
            if(obj === undefined){
                editions.push({id:data[i].tome.edition.id,
                    nameEdition:data[i].tome.edition.nameEdition,
                    nbtome:data[i].tome.edition.tomes.length,
                    nbtomeshas:1,
                    nameSerie: data[i].tome.edition.serie.nameSeries})
            }else{
                obj.nbtomeshas += 1
            }
        }
        setEdition(editions)
    }
    useEffect(()=>{
        getTomes()
    },[])
    return (
        <div className="w-[100%]  text-white">
            <h2 className="text-5xl text-center w-[100%]">{edition.length} éditions dans votre collection</h2>
            {edition.map((value:any,index:any)=>{
                return <Link key={index} to={`/edition/${value.id}`}>
                    <div className="border-b border-gray-500 w-[100%] h-[70px]">
                        <div className="text-red-600">{value.nameSerie} - {value.nameEdition}</div>
                        <div>{value.nbtomeshas}/{value.nbtome} tomes</div>
                    </div>
                </Link>
            })}
        </div>
    );
}

export default Collection;