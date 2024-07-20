export type User = {
    id: number
    nom: string;
    adresse?: string
    password?: string
    tel?: string
    email?: string
    role?: Role
    logements?: Logement[]
    services?: Service[]
}

export type Role = {
    id : number
    libelle: string
    permissions?: Permission[]

}
export type Logement = {
    id: number
}

export type Service = {
    id : number
}

export type Permission = {
    id : number
    libelle: string
}