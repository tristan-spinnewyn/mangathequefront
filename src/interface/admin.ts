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
    search: any,
}

export interface AdminElemTable{
    link: string,
    name: string,
}

export interface select{
    value: any,
    setValue: any,
    loading: boolean,
}
