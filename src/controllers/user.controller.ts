import bcrypt from 'bcrypt';
import { Request, Response, response } from "express";
import { User } from "../database/models/User";
import { Favourites } from '../database/models/Favourites';


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
            success: true,
            message: 'user profile retriver',
            data: user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error retriving user profile'
        })
    }


}

export const favoriteBooks = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id

        const favoritesBooks = await User.findOne(
            {
                select: {
                    id: true,
                    email: true,
                },
                where: {
                    id: id,
                }, relations: {
                    favourites_books: {
                        book: {
                            author: true,
                        }
                    }

                }
            }
        )

        res.json(
            {
                success: true,
                message: 'retrieveng ',
                data: favoritesBooks
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'error retreiving data',
                error: error
            }
        )
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const limit = Number(req.query.limit || 5)
        const page = Number(req.query.page)

        const users = await User.find({
            skip:(page-1)*limit,
            take:limit,

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

export const addFavoriteBook = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id
        const favouriteBook = req.body.book_id

        if (!favouriteBook) {
            return res.status(400).json({
                success: false,
                message: 'book id is requiered'
            })
        }

        const newFavorite = await Favourites.create({
            user_id: id,
            books_id: favouriteBook
        }).save()

        res.json(
            {
                succes: true,
                message: 'New favorite created',
                data: newFavorite
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: true,
                message: 'Error adding favourites',
                error: error
            }
        )
    }
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

export const deleteFavoriteBook = async (req: Request, res: Response) => {
    try {
        
        const id = req.tokenData.id
        const favoriteId = req.params.favs_id

        const userFavorite = await Favourites.findOne({
            where: {
                id: parseInt(favoriteId), 
                user_id: id
            }
        })

        if(!userFavorite){
            return res.status(400).json(
                {
                    success: false,
                    message: 'fav not found'
                }
            )
        }

        const bookDelete = await Favourites.delete(
            {
                id : parseInt(favoriteId)
            }
        )

        res.json(
            {
                succes: true,
                message: `favorite deleted successfully`,
                data: bookDelete
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error deleting favourites',
                error: error
            }
        )
    }
}

export const deleteUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Elimina usuario ${req.params.id}`
    })
}