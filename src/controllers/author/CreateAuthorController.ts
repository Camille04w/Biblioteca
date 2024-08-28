import { Request, Response } from "express";
import { CreateAuthorService } from '../../services/author/CreateAuthorService'

class CreateAuthorController {
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createAuthorService = new CreateAuthorService();

        const author = await createAuthorService.execute({
            name
        });

        return res.json(author);
    }
}

export { CreateAuthorController }