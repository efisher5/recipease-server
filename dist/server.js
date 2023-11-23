"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/routes");
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
const jwtCheck = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: 'http://localhost:3000/api',
    issuerBaseURL: 'https://dev-jrqafy16s4gs5ji0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(jwtCheck);
function getUserInfo(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://dev-jrqafy16s4gs5ji0.us.auth0.com/userinfo', { headers: { 'Authorization': `Bearer ${accessToken}` } });
            return response.data;
        }
        catch (error) {
            throw new Error('failed to get user information');
        }
    });
}
function attachUserInfo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('test');
        try {
            const accessToken = req.auth.token;
            const userInfo = yield getUserInfo(accessToken);
            req.userInfo = userInfo;
            next();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
app.use(attachUserInfo);
(0, routes_1.RegisterRoutes)(app);
app.listen(port, () => {
    console.log(`Recipease app listening on port ${port}`);
});
