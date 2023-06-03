"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_dto_1 = require("../dtos/recipe.dto");
const recipeListing_dto_1 = require("../dtos/recipeListing.dto");
class RecipeMapper {
    recipeToRecipeDto(recipe) {
        const recipeDto = new recipe_dto_1.RecipeDto();
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
    recipeToRecipeListingDto(recipe) {
        const recipeListingDto = new recipeListing_dto_1.RecipeListingDto();
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
            }
            else {
                recipeListingDto.totalTime = hours > 1 ? hours + " hours" : hours + " hour";
            }
        }
        else if (combinedTime < 60) {
            recipeListingDto.totalTime = combinedTime + " minutes";
        }
        return recipeListingDto;
    }
    recipeDtoToRecipe(recipeDto) {
        const recipe = {};
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
exports.default = RecipeMapper;
