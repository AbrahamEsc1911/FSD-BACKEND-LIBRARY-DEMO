import { Request, Response } from "express"
import { Books } from "../database/models/Books"

/////// GET

export const bookList = async (req: Request, res: Response) => {
    try {

        
        const booksList = await Books.find(
            {
                select: {
                    title: true,
                    description: true,
                    author: {
                        id: true,
                        name: true,
                        nationality: true,
                    }
                }, relations: {
                    author: true,
                }
            }
        )

        res.status(200).json({
            success: true,
            message: `Lista Libros`,
            data: booksList
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: `couldnt find books`,
            error: error
        })

    }



}

export const bookDetailsById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Detalles libro ${req.params.id}`
    })
}

////// POST 

export const newBook = async (req: Request, res: Response) => {
    try {

        ////Recuperar info
        const title = req.body.title
        const description = req.body.description
        const authorId = req.body.authors_id

        ////Validar la info

        if (!title || !description || !authorId) {
            return res.status(400).json({
                success: false,
                message: `title, description and author are needed`
            })
        };

        ////se podria validar si un libro ya está creado con el mismo isbn

        ////guardar DB

        const newBook = await Books.create(
            {
                title: title,
                description: description,
                authorId: authorId
            }
        ).save()

        res.status(201).json({
            success: true,
            message: `book created`,
            data: newBook
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: `Server error`,
            error: error
        })
    }


}

////// PUT

export const updateBooksById = async (req: Request, res: Response) => {
try {

    const id = req.params.id
    const body = req.body

    await Books.update({ id: parseInt(id) }, body)

    res.json({
        success: true,
        message: `Actualiza libro ${req.params.id}`,
        data : id
    })
    
} catch (error) {
    res.status(500).json({
        success : true,
        message : 'Couldnt updated a book',
        error : error
    })
    
}
    
}

////// DELETE

export const deleteBookById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Elimina librio ${req.params.id}`
    })
}