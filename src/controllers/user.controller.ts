import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../database/models/User";


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

export const newUser = async (req: Request, res: Response) => {
    try {
        // 1. recuperar la info
        const email = req.body.email
        const password = req.body.password

        // 2. validar la info

        if (!email || !password) {
            return res.json(400).json({
                success: false,
                message: 'email and password'
            })
        }

        //TODO validar formato email

        if (password.length < 8 || password.length > 12) {
            return res.status(400).json({
                success: false,
                message: 'Password is not valid, 8 to 12 characters must be needed'
            }
            )
        }

        //3. tratar la información
        //TODO encriptar password

        const hashedPassword = bcrypt.hashSync(password, 10)

        //4. guaradar un dato

        const newUser = await User.create({
            email : email,
            password : hashedPassword,
        }).save()

        //5.Responder
        res.status(201).json({
            success : true,
            message : 'Register',
            data : newUser
        })

        res.json({
            success: true,
            message: `Nuevo Usuario`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'user cant be register',
            error: error
        })
    }


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