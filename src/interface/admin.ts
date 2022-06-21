import {edition} from "./classesInterface";

export interface HeaderAdminInterface{
    isSerie?: boolean,
    isAuthor?: boolean,
    isEditor?:boolean,
}

export interface AdminSearchInterface{
    search: any,
    setSearch: any,
    link: string,
}

export interface AdminContentTable{
    isSerie?: boolean,
    isAuthor?: boolean,
    isEditor?:boolean,
    isNotApi?: boolean,
    search: any,
    table?: any[]
}

export interface AdminElemTable{
    link: string,
    name: string,
}

export interface select{
    value: any,
    setValue: any,
    loading?: boolean,
}

export interface addEdition{
    serieId: number|string
    getSerie: any,
}

export interface lstEdition{
    getSerie: any,
    serieId: number|string
    editions: any[]
}

export interface updateEdition{
    id:number|string,
    nameEdition: string,
    serieId: number|string,
    editeurId:number|string,
    statut: number|string,
    loading: boolean,
}

export interface tomeComponent{
    tomes: any[],
    editionId: number|string,
}

export interface switchComponent{
    isApi?: boolean,
    isManuel?: boolean,
    setIsApi: any,
    setIsManuel: any,
}

export interface lstSearch{
    data: any[],
    setUidValue: any
}

export interface elemSearch{
    name:string,
    uid:string,
    setUidValue: any
}

export interface descriptApi{
    uid:string,
    editionId: string|number,
}
export interface lstTome{
    data:any[]
}
export interface addForTome{
    editionId: number|string
}

export interface tomeElem{
    data:any
}