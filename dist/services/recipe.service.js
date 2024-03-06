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
const logger_1 = require("../config/logger");
class RecipeService {
    constructor() {
        this.recipeMapper = new recipe_mapper_1.default();
        this.recipeRepository = new recipe_repository_1.default();
    }
    findRecipes(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Note: Not adding info logs for this function so userId isn't exposed to console
                const recipes = yield this.recipeRepository.findAllRecipes(userId);
                const recipeListingDtos = recipes.map((recipe) => this.recipeMapper.recipeToRecipeListingDto(recipe));
                return recipeListingDtos;
            }
            catch (e) {
                logger_1.logger.error('Error finding recipes: ' + e);
                throw e;
            }
        });
    }
    getRecipeById(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('Getting details for recipe: ' + recipeId);
                const recipe = yield this.recipeRepository.findRecipeById(recipeId);
                const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
                logger_1.logger.info('Successfully found recipe details for recipe: ' + recipeId);
                return recipeDto;
            }
            catch (e) {
                logger_1.logger.error('Error getting recipe details: ' + e);
                throw e;
            }
        });
    }
    createRecipe(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Note: Not adding info logs for this function so userId isn't exposed to console
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
                logger_1.logger.info('Successfully updated recipe: ' + recipeDto.recipeId);
                return recipeDto;
            }
            catch (e) {
                logger_1.logger.error('Error creating recipe: ' + e);
                throw e;
            }
        });
    }
    updateRecipe(recipeId, recipe, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('Editing recipe: ' + recipeId);
                console.log(user);
                recipe.updated_by = user.email;
                recipe.updated_ts = new Date();
                recipe = yield this.recipeRepository.updateRecipe(recipeId, recipe);
                const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
                logger_1.logger.info('Successfully updated recipe: ' + recipeId);
                return recipeDto;
            }
            catch (e) {
                logger_1.logger.error('Error updating recipe: ' + e);
                throw e;
            }
        });
    }
    deleteRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('Deleting recipe: ' + recipeId);
                yield this.recipeRepository.deleteRecipe(recipeId);
                logger_1.logger.info('Successfully deleted recipe: ' + recipeId);
            }
            catch (e) {
                logger_1.logger.error('Error deleting recipe: ' + e);
                throw e;
            }
        });
    }
}
exports.default = RecipeService;
