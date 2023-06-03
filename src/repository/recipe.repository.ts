import { PrismaClient, recipe as Recipe } from '@prisma/client';

const prisma = new PrismaClient;

export default class RecipeRepository {
    public async findAllRecipes(): Promise<Recipe[]> {
        return await prisma.recipe.findMany({});
    }

    public async findRecipeById(recipeId: string): Promise<Recipe> {
        return await prisma.recipe.findFirst({
            where: { id: recipeId }
        })
    }

    public async createRecipe(recipe: Recipe): Promise<Recipe> {
        return await prisma.recipe.create({
            data: recipe
        })
    }

    public async updateRecipe(recipeId: string, recipe: Recipe): Promise<Recipe> {
        return await prisma.recipe.update({
            where: { id: recipeId },
            data: recipe
        })
    }

    public async deleteRecipe(recipeId: string): Promise<Recipe> {
        return await prisma.recipe.delete({
            where: { id: recipeId }
        })
    }
}