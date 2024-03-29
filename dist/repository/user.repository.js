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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../node_modules/.prisma/client/index");
const prisma = new index_1.PrismaClient;
class UserRepository {
    findUserOnLogin(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findFirst({
                where: { email: email }
            });
        });
    }
    findUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findFirst({
                where: { id: userId }
            });
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.create({
                data: user
            });
        });
    }
    updateUser(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.update({
                where: { id: userId },
                data: user
            });
        });
    }
    deleteRecipe(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.delete({
                where: { id: userId }
            });
        });
    }
}
exports.default = UserRepository;
