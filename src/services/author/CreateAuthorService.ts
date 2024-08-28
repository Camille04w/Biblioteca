import prismaClient from "../../prisma";

interface AuthorRequest{
    name: string;
}

class CreateAuthorService{
    async execute({ name }: AuthorRequest){

        if(name === ''){
            throw new Error('Name Invalid')
        }

        const author = await prismaClient.author.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })

        return author;

    }
}

export { CreateAuthorService }