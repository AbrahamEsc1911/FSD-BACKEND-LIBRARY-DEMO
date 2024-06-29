///// POST

import { Request, Response } from "express";

export const newUserRegister = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Registra un nuevo usuario`
    })
}

export const login = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Iniciar sesión`
    })
}