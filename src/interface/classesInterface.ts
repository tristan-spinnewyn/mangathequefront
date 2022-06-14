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