import { recipe as Recipe, user as User } from '@prisma/client';
import RecipeRepository from '../repository/recipe.repository';

export default class RecipeService {
    private recipeRepository: RecipeRepository = new RecipeRepository();

    public async findRecipes(): Promise<Recipe[]> {
        try {
            const recipes: Recipe[] = await this.recipeRepository.findAllRecipes();
            return recipes;
        } catch (e) {
            throw e;
        }
    }

    public async getRecipeById(recipeId: string): Promise<Recipe> {
        try {
            const recipe: Recipe = await this.recipeRepository.findRecipeById(recipeId);
            return recipe;
        } catch (e) {
            throw e;
        }
    }

    public async createRecipe(user: User): Promise<Recipe> {
        try {
            const recipe: Recipe = {} as Recipe;
            recipe.created_by = user.email;
            recipe.user_id = user.id;
            recipe.name = 'Blank Recipe';
            recipe.prep_time = 0;
            recipe.cook_time = 0;

            return await this.recipeRepository.createRecipe(recipe);
        } catch (e) {
            throw e;
        }
    }

    public async updateRecipe(recipeId: string, recipe: Recipe, user: User): Promise<Recipe> {
        try {
            recipe.updated_by = user.email;
            recipe.updated_ts = new Date();

            return await this.recipeRepository.updateRecipe(recipeId, recipe);
        } catch (e) {
            throw e;
        }
    }

    public async deleteRecipe(recipeId: string): Promise<void> {
        try {
            await this.recipeRepository.deleteRecipe(recipeId);
        } catch (e) {
            throw e;
        }
    }
}