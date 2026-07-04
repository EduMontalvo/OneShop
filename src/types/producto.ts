export interface Variante {
    id:string
    color:string
    imagen:string
    precio:number
    stock:boolean
}


export interface Producto {
    id: string
    nombre: string
    categoria: string
    descripcionCorta: string
    descripcionLarga: string
    destacado: boolean
    badge: string | null
    variantes: Variante[]   
}