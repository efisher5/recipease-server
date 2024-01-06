import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { auth } from 'express-oauth2-jwt-bearer';
import { RegisterRoutes } from './routes/routes';
import { setUserInfo } from './middlewares/auth';
import { user as User } from '@prisma/client';

const app = express();
const port = 3000;
const NODE_AUDIENCE = process.env.NODE_AUDIENCE;

// Auth0 logic for parsing JWT access token from front end
const jwtCheck = auth({
    audience: NODE_AUDIENCE,
    issuerBaseURL: 'https://dev-jrqafy16s4gs5ji0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

// Global declaration adding userInfo to request for auth middleware
declare global {
    namespace Express {
        interface Request {
            userInfo?: User
        }
    }
}

// Middlewares
app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(jwtCheck);
app.use(setUserInfo);

// Route declarations
RegisterRoutes(app);

app.listen(port, () => {
    console.log(`Recipease app listening on port ${port}`)
})