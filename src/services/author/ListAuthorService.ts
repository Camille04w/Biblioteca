import prismaClient from "../../prisma";

class ListAuthorService{
    async execute(){
        
        const author = await prismaClient.author.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return author;
    }
}

export { ListAuthorService }