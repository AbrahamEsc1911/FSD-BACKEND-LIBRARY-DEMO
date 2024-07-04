import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../database/models/User";


////GET

export const getUsersProfile = async (req: Request, res: Response) => {
    try {

        //// recuperar la información que trae el token, primero pasó por la funcion auth

        const Id = req.tokenData.id;

        //// Buscarlo en base de datos

        const user = await User.findOne({
            where: {
                id: Id
            }
        })
        
        res.json({
            success : true,
            message : 'user profile retriver',
            data: user
        })

    } catch (error) {

    }

   
}

export const favoriteBooks = (req: Request, res: Response) => {
    res.json({
        succes: true,
        message: `Obtener mis favoritos`
    })
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const users = await User.find({
            select: {
                email: true,
                is_active: true,
                id: true,
                created_at: true
            }
        })

        res.json({
            success: true,
            MessageChannel: `All users retrieved`,
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: true,
            MessageChannel: `Error retriving users`,
            error: error
        })
    }


}

export const userDetails = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles del usuario ${req.params.id}`
    })
}
{ }
//// POST

export const addFavoriteBook = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Agregar mi favorito`
    })
}

// export const newUser = async (req: Request, res: Response) => {
//     try {
//         // 1. recuperar la info
//         const email = req.body.email
//         const password = req.body.password

//         // 2. validar la info

//         if (!email || !password) {
//             return res.json(400).json({
//                 success: false,
//                 message: 'email and password'
//             })
//         }

//         //TODO validar formato email

//         if (password.length < 8 || password.length > 12) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Password is not valid, 8 to 12 characters must be needed'
//             }
//             )
//         }

//         //3. tratar la información
//         //TODO encriptar password

//         const hashedPassword = bcrypt.hashSync(password, 10)

//         //4. guaradar un dato

//         const newUser = await User.create({
//             email : email,
//             password : hashedPassword,
//         }).save()

//         //5.Responder
//         res.status(201).json({
//             success : true,
//             message : 'Register',
//             data : newUser
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'user cant be register',
//             error: error
//         })
//     }


// }

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