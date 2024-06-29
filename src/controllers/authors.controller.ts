import { Request, Response } from "express"

////// GET

export const authorsList = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Lista de autores`
    })
}

export const authorsDetailsById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles author ${req.params.id}`
    })
}

///// POST 

export const newAuthors = (requ: Request, res: Response) => {
    res.json({
        success: true,
        message: `Nuevo autor`
    })
}

////// PUT

export const updateAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Actualizar Autor ${req.params.id}`
    })
}

/////// DELETE

export const deleteAuthorById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Elimina Author ${req.params.id}`
    })
}