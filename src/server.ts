import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import { auth } from 'express-oauth2-jwt-bearer';

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

RegisterRoutes(app);


app.listen(port, () => {
    console.log(`Recipease app listening on port ${port}`)
})