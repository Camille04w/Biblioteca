import prismaClient from "../../prisma";

interface BookRequest{
    categoriesId: string;
}

class ListByCategoryService{
    async execute({ categoriesId }: BookRequest){
        
        const findByCategory = await prismaClient.book.findMany({
            where:{
                categoriesId: categoriesId
            }
        })

        return findByCategory;
    }
}

export { ListByCategoryService }