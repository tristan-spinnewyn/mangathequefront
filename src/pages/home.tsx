import {useEffect, useState} from "react";
import {getLastTome} from "../api/tomeApi";
import Tome from "../components/home/tome";

function Home(){
    const [tomes,setTomes] = useState<any[]>([])
    const getTomes = async()=>{
        const data = await getLastTome()
        let tomesArrays: any[] = []
        data.map((tome: any)=>{
            tomesArrays.push({id:tome.id,numero:tome.numero,serieName:tome.edition.serie.nameSeries,imageCouverture:tome.imageCouverture})
        })
        setTomes(tomesArrays)
    }
    useEffect(()=>{
        getTomes()
    },[])
    return(
        <div className="text-white flex-col w-[100%] ">
            <div className="w-[100%]">
                <h1 className="text-5xl text-center mb-5">Mangathèque</h1>
                <p className="text-3xl text-center">Suivez les sorties de manga !</p>
                <p className="text-3xl text-center">Vérifiez avant d'acheter un tome en double !</p>
            </div>
            <div className="flex flex-wrap">
                {tomes.map((value,index)=>{
                    return <Tome tome={value} key={index} />
                })}
            </div>
        </div>
    )
}

export default Home;