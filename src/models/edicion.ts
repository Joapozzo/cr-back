export interface Edicion {
    id_edicion: number;
    id_torneo: number;
    nombre?: string;
    temporada?: number;
    mes_inicio?: number;
    mes_finalizacion?: number;
    cantidad_eventuales?: number;
    partidos_eventuales?: number;
    apercibimientos?: number;
    puntos_descuento?: number;
}

