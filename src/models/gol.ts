export interface Gol {
    id_gol: number;
    id_partido?: number;
    id_jugador?: number;
    minuto?: number;
    penal?: TipoPenal;
    en_contra?: TipoGol;
}

export type TipoGol = 'S' | 'N';
export type TipoPenal = 'S' | 'N';  