export interface Usuario {
    id_usuario: number;
    dni: string;
    nombre: string;
    apellido: string;
    nacimiento?: Date;
    telefono?: string;
    email?: string;
    id_rol?: number;
    fecha_creacion: Date; // timestamp
    fecha_actualizacion: Date; // timestamp
    clave: string;
    estado: EstadoUsuario;
    img: string;
    reset_token?: string;
    reset_token_expiration?: bigint;
}

export type EstadoUsuario = 'A' | 'I';