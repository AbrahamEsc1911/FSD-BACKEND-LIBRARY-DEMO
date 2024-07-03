///// POST
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../database/models/User";

export const newUserRegister = (req : Request, res : Response) => {
    res.json({
        success : true,
        message : `Registra un nuevo usuario`
    })
}

export const login = async (req : Request, res : Response) => {
    try {
        /////recuperar la info

        const { email, password} = req.body /// forma desesctructurada, se crean varibles de acuerdo a los nombres de los atributos

        /////validar info

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message : `email and password must are needed`
            })
        }

        /////Comprobar usuario intentando traer el usuario de la Base de datos
        const userByEmail = await User.findOne(
            {
                where: {email : email} }
            )

        console.log(userByEmail)

        if(!userByEmail){
            return res.status(400).json({
                success : false,
                message: `Email or password not valid`
            })
        }

        //// Comprobar la contraseña

        const isPasswordValid = bcrypt.compareSync(password, userByEmail.password)

        if(!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Email or password not valid'
            })
        }

    res.status(200).json({
        success: true,
        message: 'login'
    })
        
    } catch (error) {

        res.status(500).json({
            success : false,
            message : 'user cant be logged',
            error : error,
        })
    }

    
}