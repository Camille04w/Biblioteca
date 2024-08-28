import prismaClient from "../../prisma";

interface BookRequest {
    isbn: string;
    title: string;
    editor: string;
    publicationYear: string;
    availableQuantity: string;
    authorId: string;
    categoriesId: string;
    volume: string;
    numberPages: string;
    banner: string;
}

class CreateBookService {
    async execute({ isbn, title, editor, publicationYear, availableQuantity, authorId, categoriesId, volume, numberPages, banner}: BookRequest) {

        const book = await prismaClient.book.create({
            data:{
                isbn: isbn,
                title: title,
                editor: editor,
                publicationYear: parseInt(publicationYear, 10),
                availableQuantity: parseInt(availableQuantity, 10),
                authorId: authorId,
                categoriesId: categoriesId,
                volume: parseInt(volume, 10),
                numberPages: parseInt(numberPages, 10),
                banner: banner
            }
        })

        return book;
    }
}

export { CreateBookService }