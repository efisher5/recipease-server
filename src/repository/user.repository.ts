import { PrismaClient, user as User } from '../../node_modules/.prisma/client/index'

const prisma = new PrismaClient;

export default class UserRepository {
    public async findUserOnLogin(email: string): Promise<User | null> {
        return await prisma.user.findFirst({
            where: { email: email }
        })
    }

    public async findUser(userId: string): Promise<User | null> {
        return await prisma.user.findFirst({
            where: { id: userId }
        })
    }

    public async createUser(user: User): Promise<User> {
        return await prisma.user.create({
            data: user
        })
    }

    public async updateUser(userId: string, user: User): Promise<User> {
        return await prisma.user.update({
            where: { id: userId },
            data: user
        })
    }

    public async deleteRecipe(userId: string): Promise<User> {
        return await prisma.user.delete({
            where: { id: userId }
        })
    }
}