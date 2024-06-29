import { Request, Response } from "express"

/////// GET

export const bookList = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Lista Libros`
    })
}

export const bookDetailsById = (req: Request, res : Response) => {
    res.json({
        success : true,
        message : `Detalles libro ${req.params.id}`
    })
}

////// POST 

export const newBook = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Nuevo Libro`
    })
}

////// PUT

export const updateBooksById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Actualiza libro ${req.params.id}`
    })
}

////// DELETE

export const deleteBookById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Elimina librio ${req.params.id}`
    })
}