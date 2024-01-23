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
const user_service_1 = __importDefault(require("../services/user.service"));
// Calls Auth0 /userinfo endpoint to get user information from access token
/* Note that this workflow isn't scalable.
* The /userinfo endpoint can only be called 5 times per minute per Auth0 Rate Limit policy.
* This endpoint is only called when a user doesn't already exist in the DB, so calls will be
* limited to first time users. Since the number of users will be limited, this shouldn't be
* a huge issue. But it's likely this will need to evolve eventually. - 12/30/23
*
* This actually shouldn't be a problem because it's 5 times per minute per user. By storing the
* value in the DB after first call, we shouldn't have to make the call again and be good - 1/4/24
* https://community.auth0.com/t/rate-limits-applied-to-userinfo-from-server-side-calls/88682
*/
function getUserInfo(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://dev-jrqafy16s4gs5ji0.us.auth0.com/userinfo', { headers: { 'Authorization': `Bearer ${accessToken}` } });
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw new Error('failed to get user information');
        }
    });
}
function setUserInfo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = new user_service_1.default();
            let user = yield userService.findUserById(req.auth.payload.sub);
            if (!user) {
                // Create new user
                const userInfo = yield getUserInfo(req.auth.token);
                const newUser = {};
                newUser.id = userInfo.sub;
                newUser.email = userInfo.email;
                newUser.first_name = userInfo.name;
                newUser.last_name = '';
                newUser.created_ts = new Date();
                user = yield userService.createUser(newUser);
            }
            req.userInfo = user;
            next(); // need this to move on from this middleware
        }
        catch (error) {
            // TODO change this
            res.status(500).json({ error: error.message });
        }
    });
}
exports.setUserInfo = setUserInfo;
