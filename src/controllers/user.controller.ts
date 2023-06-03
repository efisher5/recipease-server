import * as express from 'express';
import { user as User } from '@prisma/client';
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Request, SuccessResponse } from "tsoa";
import UserService from '../services/user.service';
import UserMapper from '../mappers/user.mapper';
import { UserDto } from '../dtos/user.dto';

@Route("/login")
export class UserController extends Controller {
    private userService: UserService = new UserService();
    private userMapper: UserMapper = new UserMapper();

    @Get("/")
    @SuccessResponse("200", "OK")
    public async login(@Request() request: express.Request): Promise<UserDto> {
        // const requestUser: User = request.user as User;
        // const user: User = await this.userService.findUser(requestUser.email);
        // return this.userMapper.userToUserDto(user);

        return null;
    }
}