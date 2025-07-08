export interface Noticia {
    id_noticia: number;
    titulo: string;
    contenido: string;
    img?: string;
    fecha_creacion: Date;
    publicada: string;
}

export interface NoticiaCategoria {
    id_noticia: number;
    id_categoria: number;
}