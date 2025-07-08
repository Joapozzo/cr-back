export interface Zona {
    id_zona: number;
    id_categoria: number;
    nombre?: string;
    tipo_zona?: string;
    cantidad_equipos?: number;
    ronda: string;
    fase?: number;
    id_etapa: number;
    id_equipo_campeon?: number;
    campeon?: string;
    terminada?: string;
}