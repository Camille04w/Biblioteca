import { Request, Response } from "express";
import { CreateBookService } from "../../services/book/CreateBookService";

class CreateBookController{
    async handle(req: Request, res: Response){
        const { isbn, title, editor, publicationYear, availableQuantity, authorId, categoriesId, volume, numberPages } = req.body

        const createBookService = new CreateBookService();
        
        if(!req.file){
            throw new Error("error upload file")
        }else{

            const { originalname, filename: banner } = req.file;

            const book = await createBookService.execute({
                isbn,
                title,
                editor,
                publicationYear,
                availableQuantity,
                authorId,
                categoriesId,
                volume,
                numberPages,
                banner
            });
    
            return res.json(book)
        }


    }
}

export { CreateBookController }