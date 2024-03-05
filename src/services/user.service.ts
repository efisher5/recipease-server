import { user as User } from '@prisma/client';
import UserRepository from '../repository/user.repository';

export default class UserService {
    private userRepository: UserRepository = new UserRepository();

    public async findUserById(userId: string): Promise<User> {
        try {
            const user: User = await this.userRepository.findUser(userId);
            return user;
        } catch(e) {
            throw e;
        }
    }

    public async createUser(user: User): Promise<User> {
        try {
            return await this.userRepository.createUser(user);
        } catch(e) {
            throw e;
        }
    }

    public async updateUser(userId: string, user: User): Promise<User> {
        try {
            return await this.userRepository.updateUser(userId, user);
        } catch(e) {
            throw e;
        }
    }

    public async deleteUser(userId: string): Promise<void> {
        try {
            await this.userRepository.deleteRecipe(userId);
        } catch(e) {
            throw e;
        }
    }
}