import { PrismaClient, user as User } from '../../node_modules/.prisma/client/index'

const prisma = new PrismaClient;

export default class UserRepository {
    public async findUserOnLogin(email: string): Promise<User | null> {
        return await prisma.user.findFirst({
            where: { email: email }
        })
    }
}