export interface Partido {
    id_partido: number;
    id_equipoLocal?: number;
    id_equipoVisita?: number;
    jornada: number;
    dia: Date;
    hora: string; // time
    goles_local?: number;
    goles_visita?: number;
    pen_local?: number;
    pen_visita?: number;
    cancha?: string;
    arbitro?: string;
    destacado: boolean;
    descripcion?: string;
    id_planillero?: number;
    id_jugador_destacado?: number;
    estado: EstadoPartido;
    id_edicion?: number;
    id_categoria?: number;
    id_zona?: number;
    vacante_local?: number;
    vacante_visita?: number;
    id_partido_previo_local?: number;
    id_partido_previo_visita?: number;
    res_partido_previo_local?: string;
    res_partido_previo_visita?: string;
    id_partido_posterior_ganador?: number;
    id_partido_posterior_perdedor?: number;
    interzonal: string; // varchar(11) - Default: 'N'
    ventaja_deportiva?: number;
    ida?: number;
    vuelta?: number;
}

export type EstadoPartido = 'P' | 'C' | 'T' | 'F' | 'S' | 'A';