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
