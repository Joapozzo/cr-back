export interface Rol {
    id_rol: number;
    nombre: RolUsuario;
}

export type RolUsuario = 'ADMIN' | 'PLANILLERO' | 'USER';