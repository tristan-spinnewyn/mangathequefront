export interface UserInterface {
    email: string
    password?: string
    pseudonyme?: string
}

export interface updateUserInterface {
    email: string,
    pseudonyme: string,
    currentPassword: string,
}

export interface updatePasswordInterface{
    changePassword: boolean,
    password: string,
    currentPassword: string,
    email: string,
    pseudonyme: string,
}

export interface auteur{
    id?:number|string,
    nameAuteur: string,
}

export interface editeur{
    id?:number|string,
    nameEditeur: string,
}

export interface serie{
    id?:number|string,
    nameSeries: string,
    auteurId: number|string,
}

export interface edition{
    id?:number|string,
    nameEdition: string,
    serieId:number|string,
    editeurId: number|string,
    statut: number,
}

export interface tome{
    numero: string|number,
    desc:string,
    nbpage:string|number,
    dateSortie:Date,
    imageCouverture: string,
    isbn:string,
    editionId: string|number,
}

export interface avis{
    id?:string|number,
    commantaire:string,
    tomeId:string|number
}