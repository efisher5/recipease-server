"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const routes_1 = require("./routes/routes");
const auth_1 = require("./middlewares/auth");
const app = (0, express_1.default)();
const port = 3000;
// Auth0 logic for parsing JWT access token from front end
const jwtCheck = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: 'http://localhost:3000/api',
    issuerBaseURL: 'https://dev-jrqafy16s4gs5ji0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
// Middlewares
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(jwtCheck);
app.use(auth_1.setUserInfo);
// Route declarations
(0, routes_1.RegisterRoutes)(app);
app.listen(port, () => {
    console.log(`Recipease app listening on port ${port}`);
});
