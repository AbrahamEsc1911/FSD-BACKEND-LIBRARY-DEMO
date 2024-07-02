import { Request, Response } from "express"
import { Authors } from "../database/models/Authors"

////// GET

export const authorsList = async (req: Request, res: Response) => {
   try {
    //// Recuperar la info de la BD

    //// modelo (creado anteriormente)
    const authors = await Authors.find()

    //// devolver la info de la BD
    res.json({
        success: true,
        message: `all authors retrieve successfully`,
        data: authors
    })
    
   } catch (error) {
    res.status(500).json({
        succes: true,
        message: 'cant retrive authors'
    })
   }
    
}

export const authorsDetailsById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles author ${req.params.id}`
    })
}

///// POST 

export const newAuthors = async (req: Request, res: Response) => {

    ///// Recuperar información 

    const name = req.body.name;
    const nationality = req.body.nationality;

  
try {

    ///// validar la información

    if (!name) {
        return res.status(400).json({
            success: true,
            message: 'name is required'
        })
    }

    if (!nationality) {
        return res.status(400).json({
            success: true,
            message: 'nationality is required'
        })
    }

 //// tratar la información


//// Atacar la bd
    const newAuthors = await Authors.create({
        name: name, ////esto es dinamico, será lo que se pase por la request (puede ser un input de un usuario)
        nationality: nationality
    }).save();

    res.json({
        success: true,
        message: `Nuevo autor`,
        data: newAuthors
    })

    
} catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error creating author'
    })
}

}

////// PUT

export const updateAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Actualizar Autor ${req.params.id}`
    })
}

/////// DELETE

export const deleteAuthorById = async (req: Request, res: Response) => {
   try {

    /////Recuperar el ID a eliminar 

    const authorIdToDelete = req.params.id

    /////Eliminar el author de la BD

    const authorDeleted = await Authors.delete(authorIdToDelete)
    if(!authorDeleted.affected) {
        return res.status(404).json({
            success : false,
            message : 'Author doesnt exist'
        })
    }

    /////Repuesta

    res.status(200).json({
        success: true,
        message: `Elimina Author ${req.params.id}`,
        data : authorDeleted
    })
   } catch (error) {
    res.status(500).json({
        success : false,
        message : "Error deleting",
        error : error
    })
   }
   
   
   
}