export interface Jugador {
    id_jugador: number;
    dni?: string;
    nombre: string;
    apellido?: string;
    posicion?: string;
    id_equipo?: number;
    img: string;
    fecha_nacimiento?: Date;
    estado: EstadoJugador;
}

// Modelo para Jugadores Destacados
export interface JugadorDestacado {
    id_partido: number;
    id_equipo: number;
    id_jugador: number;
    id_categoria: number;
    dt: DreamTeamDestacado;
    posicion?: string;
}

export type EstadoJugador = "A" | "I";
export type DreamTeamDestacado = "A" | "I";