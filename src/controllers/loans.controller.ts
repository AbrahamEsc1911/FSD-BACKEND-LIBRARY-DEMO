///// GET

import { Request, Response } from "express";

export const loansList = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `lista préstamos`
    })
}

export const loansDetailsById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Detalles préstamos ${req.params.id}`
    })
}

export const loansByCurrentUser = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Préstamos del usuario autenticado`
    })
}

export const loansByUserId = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Préstamos por usuario ${req.params.usersId}`
    })
}

////// POST 

export const newLoans = (req: Request, res : Response) => {
    res.json({
        success : true,
        message : `Nuevo préstamo`
    })
}

///// PUT

export const updateLoansById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message :  `Actualiza prestamo ${req.params.id}`
    })
}

export const loansReturnedById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Actualiza préstamo ${req.params.id} como devuelto`
    })
}

/////// DELETE

export const deleteLoansById = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Elimina prestamo ${req.params.id}`
    })
}