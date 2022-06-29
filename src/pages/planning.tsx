import React, {useEffect, useState} from 'react';
import {getNextTome} from "../api/tomeApi";
import dateFormat, { masks } from 'dateformat';
import {Link} from "react-router-dom";

function Planning() {
    const [date,setDate] = useState<any[]>([{date:new Date(),tomes:[{id:'',numero:'',nameEdition:'',nameSeries:''}]}])
    const get = async ()=>{
        const data = await getNextTome()
        const dateArray:any[] = []
        for(let i = 0; i < data.length;i++){
            let obj = dateArray.find((o: { date: any; }) => o.date === data[i].dateSortie)
            if(obj === undefined){
                dateArray.push({date:data[i].dateSortie,tomes:[{id:data[i].id,numero:data[i].numero,imageCouverture:data[i].imageCouverture,
                        nameEdition:data[i].edition.nameEdition,
                        nameSeries:data[i].edition.serie.nameSeries}]})
            }else{
                obj.tomes.push({id:data[i].id,numero:data[i].numero,imageCouverture:data[i].imageCouverture,
                    nameEdition:data[i].edition.nameEdition,
                    nameSeries:data[i].edition.serie.nameSeries})
            }
        }
        console.log(dateArray)
        setDate(dateArray)
    }
    useEffect(()=>{
        get()
    },[])
    return (
        <div className="text-white w-[100%]">
            {date.map((value:any,index:any)=>{
                return(
                    <div key={index}>
                        <p className="w-[100%] bg-[#222222]">{dateFormat(value.date,'fullDate')}</p>
                        <div className="flex w-[100%]">
                            {value.tomes.map((tome:any,indexTome:any)=>{
                                return(
                                    <Link key={indexTome} to={`/tome/${tome.id}`} className="w-[50%] sm:w-[14%] p-3">
                                        <img src={tome.imageCouverture} />
                                        <p>{tome.nameSeries} - {tome.nameEdition}</p>
                                        <p>Tome n°{tome.numero}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Planning;