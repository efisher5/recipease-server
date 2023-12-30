import express from 'express';
import axios from 'axios';
import UserService from '../services/user.service';
import { user as User } from '@prisma/client';

// Calls Auth0 /userinfo endpoint to get user information from access token
/* Note that this workflow isn't scalable.
* The /userinfo endpoint can only be called 5 times per minute per Auth0 Rate Limit policy.
* This endpoint is only called when a user doesn't already exist in the DB, so calls will be
* limited to first time users. Since the number of users will be limited, this shouldn't be
* a huge issue. But it's likely this will need to evolve eventually. - 12/30/23
*/
async function getUserInfo(accessToken: string) {
    try {
        const response = await axios.get('https://dev-jrqafy16s4gs5ji0.us.auth0.com/userinfo',
        { headers: {'Authorization': `Bearer ${accessToken}`}})
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('failed to get user information')
    }
}

export async function setUserInfo(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const userService: UserService = new UserService();
        let user = await userService.findUserById(req.auth.payload.sub);

        if (!user) {
            // Create new user
            const userInfo = await getUserInfo(req.auth.token);
            const newUser = {} as User;
            newUser.id = userInfo.sub;
            newUser.email = userInfo.email;
            newUser.first_name = userInfo.name;
            newUser.last_name = '';
            newUser.created_ts = new Date();

            user = await userService.createUser(newUser);
        }
        req.userInfo = user;
        next(); // need this to move on from this middleware
    } catch (error) {
        // TODO change this
        res.status(500).json({error: error.message})
    }
}