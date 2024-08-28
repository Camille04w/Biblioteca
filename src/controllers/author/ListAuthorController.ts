import { Request, Response } from "express";
import { ListAuthorService } from "../../services/author/ListAuthorService";

class ListAuthorController{
    async handle(req: Request, res: Response){
        const listAuthorService = new ListAuthorService();

        const author = await listAuthorService.execute();

        return res.json(author);
    }
}

export { ListAuthorController }