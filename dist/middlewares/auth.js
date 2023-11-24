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
exports.setUserInfo = void 0;
const axios_1 = __importDefault(require("axios"));
// Calls Auth0 /userinfo endpoint to get user information from access token
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
/* TODO Need to convert the userInfo object into a UserDto that can be used within the app
- userInfo object is missing certain properties (created_ts) that are available but are not being passed
- userInfo object has user_id but it's not the same format as uuid - will need to convert
- workflow needs to be:
    - take auth0 id and find it in DB
    - if user is returned, then attach that user to the req object
    - if no user is returned, create a new user with auth0 information
    - attach that new user to the req object
*/
// Attach user information onto request object
function setUserInfo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accessToken = req.auth.token;
            const userInfo = yield getUserInfo(accessToken);
            req.userInfo = userInfo;
            next(); // need this to move on from this middleware
        }
        catch (error) {
            // TODO change this
            res.status(500).json({ error: error.message });
        }
    });
}
exports.setUserInfo = setUserInfo;
