"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_dto_1 = require("../dtos/user.dto");
class UserMapper {
    userToUserDto(user) {
        const userDto = new user_dto_1.UserDto;
        userDto.id = user.id;
        userDto.email = user.email;
        userDto.firstName = user.first_name;
        userDto.lastName = user.last_name;
        return userDto;
    }
    userDtoToUser(userDto) {
        const user = {};
        user.id = userDto.id;
        user.email = userDto.email;
        user.first_name = userDto.firstName;
        user.last_name = userDto.lastName;
        return user;
    }
}
exports.default = UserMapper;
