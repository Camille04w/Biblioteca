import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string,
    email: string,
    password: string,
    address: string,
    cpf: string,
    phone: string,
}

class CreateUserService {
    async execute({ name, email, password, address, cpf, phone }: UserRequest) {

        if (!email) {
            throw new Error("Email incorreto")
        }
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email já está cadastrado")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                address: address,
                cpf: cpf,
                phone: phone,

            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }


}
export { CreateUserService }