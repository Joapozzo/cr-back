export interface Planillero {
    id_equipo: number;
    id_jugador: number;
    id_edicion: number;
    id_categoria: number;
    eventual: Eventual;
    sancionado?: Sancionado;
}

export type Eventual = 'S' | 'N';
export type Sancionado = 'S' | 'N';