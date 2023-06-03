import { user as User } from '@prisma/client';
import { UserDto } from '../dtos/user.dto';

export default class UserMapper {
    public userToUserDto(user: User): UserDto {
        const userDto: UserDto = new UserDto;

        userDto.id = user.id;
        userDto.email = user.email;
        userDto.firstName = user.first_name;
        userDto.lastName = user.last_name;

        return userDto;
    }

    public userDtoToUser(userDto: UserDto): User {
        const user =  {} as User;

        user.id = userDto.id;
        user.email = userDto.email;
        user.first_name = userDto.firstName;
        user.last_name = userDto.lastName;
        user.password = userDto.password;

        return user;
    }
}