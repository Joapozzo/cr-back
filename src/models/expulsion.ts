export interface Expulsion {
    id_expulsion: number;
    id_partido: number;
    id_jugador: number;
    minuto?: number;
    descripcion?: string;
    motivo?: string;
    estado: EstadoExpulsion;
    fechas: number;
    fechas_restantes?: number;
    multa: string; // 'S' | 'N'
}

export type EstadoExpulsion = 'I' | 'A';