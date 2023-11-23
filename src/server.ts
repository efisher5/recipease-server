import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import { auth } from 'express-oauth2-jwt-bearer';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;
const jwtCheck = auth({
    audience: 'http://localhost:3000/api',
    issuerBaseURL: 'https://dev-jrqafy16s4gs5ji0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(jwtCheck);

declare global {
    namespace Express {
        interface Request {
            userInfo?: any
        }
    }
}
async function getUserInfo(accessToken: string) {
    try {
        const response = await axios.get('https://dev-jrqafy16s4gs5ji0.us.auth0.com/userinfo',
        { headers: {'Authorization': `Bearer ${accessToken}`}})
        return response.data;
    } catch (error) {
        throw new Error('failed to get user information')
    }
}

async function attachUserInfo(req: express.Request, res: Response, next: NextFunction) {
    console.log('test')
    try {
        const accessToken = req.auth.token;
        const userInfo = await getUserInfo(accessToken);
        req.userInfo = userInfo;
        next();
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
app.use(attachUserInfo);
RegisterRoutes(app);


app.listen(port, () => {
    console.log(`Recipease app listening on port ${port}`)
})