import { user as User } from '@prisma/client';
import UserRepository from '../repository/user.repository';

export default class UserService {
    private userRepository: UserRepository = new UserRepository();

    public async findUser(email: string): Promise<User> {
        try {
            const user: User = await this.userRepository.findUserOnLogin(email);
            return user;
        } catch (e) {
            throw e;
        }
    }
}