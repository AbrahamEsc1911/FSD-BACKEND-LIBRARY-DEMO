import { Request, Response } from "express";


////GET

export const usersProfile = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles del perfil`
    })
}

export const favoriteBooks = (req: Request, res: Response) => {
    res.json({
        succes: true,
        message: `Obtener mis favoritos`
    })
}

export const allUsers = (req: Request, res: Response) => {
    res.json({
        success: true,
        MessageChannel: `Lista de usuarios`
    })
}

export const userDetails = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles del usuario ${req.params.id}`
    })
}

//// POST

export const addFavoriteBook = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Agregar mi favorito`
    })
}

export const newUser = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Nuevo Usuario`
    })
}

//// PUT

export const updateProfile = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Actualiza perfil`
    })
}

export const updateUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Actualiza usuario ${req.params.id}`
    })
}

export const updateRoleById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Cambiar rol del id${req.params.id}`
    })
}

//// DELETE

export const deleteFavoriteBook = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Eliminar mi Favorito`
    })
}

export const deleteUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Elimina usuario ${req.params.id}`
    })
}