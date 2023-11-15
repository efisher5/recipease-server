import { PrismaClient, recipe as Recipe, user as User } from '@prisma/client';

const prisma = new PrismaClient;

export default class RecipeRepository {
    public async findAllRecipes(user: User): Promise<Recipe[]> {
        return await prisma.recipe.findMany({
            where: { user_id: user.id }
        });
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