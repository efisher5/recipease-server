import { recipe as Recipe } from '@prisma/client';
import { RecipeDto } from '../dtos/recipe.dto';
import { RecipeListingDto } from '../dtos/recipeListing.dto';

export default class RecipeMapper {
    public recipeToRecipeDto(recipe: Recipe): RecipeDto {
        const recipeDto: RecipeDto = new RecipeDto();
        
        recipeDto.recipeId = recipe.id;
        recipeDto.userId = recipe.user_id;
        recipeDto.name = recipe.name;
        recipeDto.recipeDescription = recipe.description;
        recipeDto.prepTime = recipe.prep_time;
        recipeDto.cookTime = recipe.cook_time;
        recipeDto.ingredients = recipe.ingredients;
        recipeDto.instructions = recipe.instructions;

        return recipeDto;
    }

    public recipeToRecipeListingDto(recipe: Recipe): RecipeListingDto {
        const recipeListingDto: RecipeListingDto = new RecipeListingDto();

        recipeListingDto.recipeId = recipe.id;
        recipeListingDto.userId = recipe.user_id;
        recipeListingDto.name = recipe.name;
        recipeListingDto.createdTs = recipe.created_ts;

        // Convert prep time and cook time into cook time
        let combinedTime = recipe.cook_time + recipe.prep_time;
        let hours = 0;
        let minutes = 0;
        if (combinedTime >= 60) {
            hours = Math.floor(combinedTime / 60);
            minutes = combinedTime % 60;
            if (minutes) {
                recipeListingDto.totalTime = hours + " hours " + minutes + " minutes";
            } else {
                recipeListingDto.totalTime = hours > 1 ? hours + " hours" : hours + " hour";
            }
            
        } else if (combinedTime < 60) {
            recipeListingDto.totalTime = combinedTime + " minutes";
        } 

        return recipeListingDto;
    }

    public recipeDtoToRecipe(recipeDto: RecipeDto): Recipe {
        const recipe = {} as Recipe;

        recipe.id = recipeDto.recipeId;
        recipe.user_id = recipeDto.userId;
        recipe.name = recipeDto.name;
        recipe.description = recipeDto.recipeDescription;
        recipe.prep_time = recipeDto.prepTime;
        recipe.cook_time = recipeDto.cookTime;
        recipe.ingredients = recipeDto.ingredients;
        recipe.instructions = recipeDto.instructions;

        return recipe;
    }
}