export interface Libros {
    id: string;
    isbn: string;
    titulo: string;
    autor: string;
    editorial: string;
    anio: number;
    estado: string;
    prestamos: number;
    usuarioId: number;  
    vendedorId: number;
}
