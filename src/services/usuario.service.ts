import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

export const crearUsuario = async (data: {
    nombre: string;
    email: string;
    password: string;
}) => {
    const usuario = await prisma.usuario.create({
        data,
    });
    return usuario;
};
