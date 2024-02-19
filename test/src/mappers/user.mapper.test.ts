import { describe, expect, test } from '@jest/globals';
import { user as User } from '@prisma/client';
import { UserDto } from '../../../src/dtos/user.dto';
import { userExample } from '../../mock_data/userMock';
import { userDtoExample } from '../../mock_data/userDtoMock';
import UserMapper from '../../../src/mappers/user.mapper';

describe("Test User Mapper", () => {
    const userMapper: UserMapper = new UserMapper();

    test('userToUserDto', () => {
        const res: UserDto = userMapper.userToUserDto(userExample);
        expect(res.firstName).toEqual(userDtoExample.firstName);
        expect(res.lastName).toEqual(userDtoExample.lastName);
        expect(res.email).toEqual(userDtoExample.email);
    })

    test('userDtoToUser', () => {
        const res: User = userMapper.userDtoToUser(userDtoExample);
        expect(res.first_name).toEqual(userExample.first_name);
        expect(res.last_name).toEqual(userExample.last_name);
        expect(res.email).toEqual(userExample.email);
    })
})