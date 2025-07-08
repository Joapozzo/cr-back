export interface Categoria {
    id_categoria: number;
    id_edicion: number;
    nombre: string;
    genero?: Genero;
    tipo_futbol?: number;
    duracion_tiempo?: number;
    duracion_entretiempo?: number;
    publicada: Publicada;
    puntos_victoria?: number;
    puntos_empate?: number;
    puntos_derrota?: number;
}

export type Genero = 'M' | 'F';
export type Publicada = 'S' | 'N';