import { recipe as Recipe, user as User } from '@prisma/client';
import RecipeRepository from '../repository/recipe.repository';
import RecipeMapper from '../mappers/recipe.mapper';
import { RecipeListingDto } from '../dtos/recipeListing.dto';
import { RecipeDto } from '../dtos/recipe.dto';
import { logger } from '../config/logger';

export default class RecipeService {
    private recipeMapper: RecipeMapper = new RecipeMapper();
    private recipeRepository: RecipeRepository = new RecipeRepository();

    public async findRecipes(userId: string): Promise<RecipeListingDto[]> {
        try {
            // Note: Not adding info logs for this function so userId isn't exposed to console
            const recipes: Recipe[] = await this.recipeRepository.findAllRecipes(userId);
            const recipeListingDtos = recipes.map((recipe) => this.recipeMapper.recipeToRecipeListingDto(recipe))
            return recipeListingDtos;
        } catch (e) {
            logger.error('Error finding recipes: ' + e);
            throw e;
        }
    }

    public async getRecipeById(recipeId: string): Promise<RecipeDto> {
        try {
            logger.info('Getting details for recipe: ' + recipeId);
            const recipe: Recipe = await this.recipeRepository.findRecipeById(recipeId);
            const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
            logger.info('Successfully found recipe details for recipe: ' + recipeId);
            return recipeDto;
        } catch (e) {
            logger.error('Error getting recipe details: ' + e);
            throw e;
        }
    }

    public async createRecipe(user: User): Promise<RecipeDto> {
        try {
            // Note: Not adding info logs for this function so userId isn't exposed to console
            let recipe: Recipe = {} as Recipe;
            recipe.created_by = user.email;
            recipe.user_id = user.id;
            recipe.name = 'Blank Recipe';
            recipe.prep_time_hours = 0;
            recipe.prep_time_minutes = 0;
            recipe.cook_time_hours = 0;
            recipe.cook_time_minutes = 0;

            recipe = await this.recipeRepository.createRecipe(recipe);
            const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
            logger.info('Successfully updated recipe: ' + recipeDto.recipeId);
            return recipeDto;
        } catch (e) {
            logger.error('Error creating recipe: ' + e);
            throw e;
        }
    }

    public async updateRecipe(recipeId: string, recipe: Recipe, user: User): Promise<RecipeDto> {
        try {
            logger.info('Editing recipe: ' + recipeId);
            recipe.user_id = user.id;
            recipe.updated_by = user.email;
            recipe.updated_ts = new Date();

            recipe = await this.recipeRepository.updateRecipe(recipeId, recipe);
            const recipeDto = this.recipeMapper.recipeToRecipeDto(recipe);
            logger.info('Successfully updated recipe: ' + recipeId);
            return recipeDto;
        } catch (e) {
            logger.error('Error updating recipe: ' + e);
            throw e;
        }
    }

    public async deleteRecipe(recipeId: string): Promise<void> {
        try {
            logger.info('Deleting recipe: ' + recipeId);
            await this.recipeRepository.deleteRecipe(recipeId);
            logger.info('Successfully deleted recipe: ' + recipeId);
        } catch (e) {
            logger.error('Error deleting recipe: ' + e);
            throw e;
        }
    }
}