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
const recipe_mapper_1 = __importDefault(require("../mappers/recipe.mapper"));
class RecipeService {
    constructor() {
        this.recipeMapper = new recipe_mapper_1.default();
        this.recipeRepository = new recipe_repository_1.default();
    }
    findRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recipes = yield this.recipeRepository.findAllRecipes();
                const recipeListingDtos = recipes.map((recipe) => this.recipeMapper.recipeToRecipeListingDto(recipe));
                return recipeListingDtos;
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
                const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
                return recipeDto;
            }
            catch (e) {
                throw e;
            }
        });
    }
    createRecipe(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let recipe = {};
                recipe.created_by = user.email;
                recipe.user_id = user.id;
                recipe.name = 'Blank Recipe';
                recipe.prep_time_hours = 0;
                recipe.prep_time_minutes = 0;
                recipe.cook_time_hours = 0;
                recipe.cook_time_minutes = 0;
                recipe = yield this.recipeRepository.createRecipe(recipe);
                const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
                return recipeDto;
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
                const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
                return recipeDto;
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
