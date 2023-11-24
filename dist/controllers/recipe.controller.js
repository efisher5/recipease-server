"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.RecipeController = void 0;
const express = __importStar(require("express"));
const tsoa_1 = require("tsoa");
const recipe_service_1 = __importDefault(require("../services/recipe.service"));
const recipe_dto_1 = require("../dtos/recipe.dto");
const recipe_mapper_1 = __importDefault(require("../mappers/recipe.mapper"));
const user_mapper_1 = __importDefault(require("../mappers/user.mapper"));
const user_service_1 = __importDefault(require("../services/user.service"));
let RecipeController = class RecipeController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.recipeService = new recipe_service_1.default();
        this.recipeMapper = new recipe_mapper_1.default();
        this.userMapper = new user_mapper_1.default();
        this.userService = new user_service_1.default();
    }
    getRecipes(request) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(request.userInfo);
            const recipes = yield this.recipeService.findRecipes();
            return recipes.map((recipe) => this.recipeMapper.recipeToRecipeListingDto(recipe));
        });
    }
    getRecipe(request, recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.recipeService.getRecipeById(recipeId);
            return this.recipeMapper.recipeToRecipeDto(recipe);
        });
    }
    createBlankRecipie(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUser = request.userInfo;
            const requestUser = this.userMapper.userDtoToUser(yield this.userService.findUser('monsterK@admin.com'));
            const recipe = yield this.recipeService.createRecipe(requestUser);
            return this.recipeMapper.recipeToRecipeDto(recipe);
        });
    }
    updateRecipe(request, recipeId, recipeDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUser = request.userInfo;
            const requestUser = this.userMapper.userDtoToUser(yield this.userService.findUser('monsterK@admin.com'));
            const recipe = this.recipeMapper.recipeDtoToRecipe(recipeDto);
            return this.recipeMapper.recipeToRecipeDto(yield this.recipeService.updateRecipe(recipeId, recipe, requestUser));
        });
    }
    deleteRecipe(request, recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.recipeService.deleteRecipe(recipeId);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.SuccessResponse)("200", "OK"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "getRecipes", null);
__decorate([
    (0, tsoa_1.Get)("/{recipeId}"),
    (0, tsoa_1.SuccessResponse)("200", "OK"),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "getRecipe", null);
__decorate([
    (0, tsoa_1.Post)("/blank"),
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "createBlankRecipie", null);
__decorate([
    (0, tsoa_1.Put)("/{recipeId}"),
    (0, tsoa_1.SuccessResponse)("200", "OK"),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __param(2, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, recipe_dto_1.RecipeDto]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "updateRecipe", null);
__decorate([
    (0, tsoa_1.Delete)("/{recipeId}"),
    (0, tsoa_1.SuccessResponse)("204", "No Content"),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "deleteRecipe", null);
RecipeController = __decorate([
    (0, tsoa_1.Route)("/recipes")
], RecipeController);
exports.RecipeController = RecipeController;
