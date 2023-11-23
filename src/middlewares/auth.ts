import express from 'express';
import axios from 'axios';

// Calls Auth0 /userinfo endpoint to get user information from access token
async function getUserInfo(accessToken: string) {
    try {
        const response = await axios.get('https://dev-jrqafy16s4gs5ji0.us.auth0.com/userinfo',
        { headers: {'Authorization': `Bearer ${accessToken}`}})
        return response.data;
    } catch (error) {
        throw new Error('failed to get user information')
    }
}

// Attach user information onto request object
export async function setUserInfo(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const accessToken = req.auth.token;
        const userInfo = await getUserInfo(accessToken);
        req.userInfo = userInfo;
        next(); // need this to move on from this middleware
    } catch (error) {
        // TODO change this
        res.status(500).json({error: error.message})
    }
}