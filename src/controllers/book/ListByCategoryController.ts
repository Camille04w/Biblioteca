import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/book/ListByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const categoriesId = req.query.categoriesId as string;

        const listByCategory = new ListByCategoryService();

        const books = await listByCategory.execute({
            categoriesId
        });

        return res.json(books)
    }
}

export { ListByCategoryController };