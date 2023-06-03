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
const recipe_repository_1 = __importDefault(require("../repository/recipe.repository"));
class RecipeService {
    constructor() {
        this.recipeRepository = new recipe_repository_1.default();
    }
    findRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recipes = yield this.recipeRepository.findAllRecipes();
                return recipes;
            }
            catch (e) {
                throw e;
            }
        });
    }
    getRecipeById(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recipe = yield this.recipeRepository.findRecipeById(recipeId);
                return recipe;
            }
            catch (e) {
                throw e;
            }
        });
    }
    createRecipe(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recipe = {};
                recipe.created_by = user.email;
                recipe.user_id = user.id;
                recipe.name = 'Blank Recipe';
                recipe.prep_time = 0;
                recipe.cook_time = 0;
                return yield this.recipeRepository.createRecipe(recipe);
            }
            catch (e) {
                throw e;
            }
        });
    }
    updateRecipe(recipeId, recipe, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                recipe.updated_by = user.email;
                recipe.updated_ts = new Date();
                return yield this.recipeRepository.updateRecipe(recipeId, recipe);
            }
            catch (e) {
                throw e;
            }
        });
    }
    deleteRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.recipeRepository.deleteRecipe(recipeId);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = RecipeService;