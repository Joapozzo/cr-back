import { Request, Response } from 'express';
import { crearUsuario } from '../services/usuario.service';

export const crearUsuarioHandler = async (req: Request, res: Response) => {
    try {
        const usuario = await crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
