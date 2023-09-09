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
        recipeDto.prepTimeHours = recipe.prep_time_hours;
        recipeDto.prepTimeMinutes = recipe.prep_time_minutes;
        recipeDto.cookTimeHours = recipe.cook_time_hours;
        recipeDto.cookTimeMinutes = recipe.cook_time_minutes;
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
        let combinedMinutes = recipe.cook_time_minutes + recipe.prep_time_minutes;
        let combinedHours = recipe.cook_time_hours + recipe.prep_time_hours;
        if (combinedMinutes >= 60) {
            combinedHours++;
            combinedMinutes = combinedMinutes % 60;
        }

        let totalTime = '';
        if (combinedHours > 0) {
            if (combinedHours === 1) {
                totalTime += combinedHours + ' hour'
            } else {
                totalTime += combinedHours + ' hours'
            }
        }

        if (combinedMinutes > 0) {
            if (combinedMinutes === 1) {
                totalTime += ' ' + combinedMinutes + ' minute'
            } else {
                totalTime += ' ' + combinedMinutes + ' minutes'
            }
        }
        recipeListingDto.totalTime = totalTime;

        return recipeListingDto;
    }

    public recipeDtoToRecipe(recipeDto: RecipeDto): Recipe {
        const recipe = {} as Recipe;

        recipe.id = recipeDto.recipeId;
        recipe.user_id = recipeDto.userId;
        recipe.name = recipeDto.name;
        recipe.description = recipeDto.recipeDescription;
        recipe.prep_time_hours = recipeDto.prepTimeHours;
        recipe.prep_time_minutes = recipeDto.prepTimeMinutes;
        recipe.cook_time_hours = recipeDto.cookTimeHours;
        recipe.cook_time_minutes = recipeDto.cookTimeMinutes;
        recipe.ingredients = recipeDto.ingredients;
        recipe.instructions = recipeDto.instructions;

        return recipe;
    }
}