import { describe, expect, test } from '@jest/globals';
import { recipe as Recipe } from '@prisma/client';
import { RecipeDto } from '../../../src/dtos/recipe.dto';
import { RecipeListingDto } from '../../../src/dtos/recipeListing.dto';
import { recipeExample, recipeOneHourExample, recipeMultipleHoursExample, recipeOneMinuteExample } from '../../mock_data/recipeMock';
import { recipeDtoExample } from '../../mock_data/recipeDtoMock';
import { recipeListingDtoExample } from '../../mock_data/recipeListingDtoMock';
import RecipeMapper from '../../../src/mappers/recipe.mapper';

describe("Test Recipe Mapper", () => {
    const recipeMapper: RecipeMapper = new RecipeMapper();

    test('recipeToRecipeDto', () => {
        const res: RecipeDto = recipeMapper.recipeToRecipeDto(recipeExample);
        expect(res.name).toEqual(recipeDtoExample.name);
        expect(res.notes).toEqual(recipeDtoExample.notes);
        expect(res.prepTimeHours).toEqual(recipeDtoExample.prepTimeHours);
        expect(res.prepTimeMinutes).toEqual(recipeDtoExample.prepTimeMinutes);
        expect(res.cookTimeHours).toEqual(recipeDtoExample.cookTimeHours);
        expect(res.cookTimeMinutes).toEqual(recipeDtoExample.cookTimeMinutes);

        for (let i = 0; i < res.ingredients!.length; i++) {
            let ingredient = res.ingredients![i];
            expect(ingredient).toEqual(recipeDtoExample.ingredients![i])
        }

        for (let i = 0; i < res.instructions!.length; i++) {
            let instruction = res.instructions![i];
            expect(instruction).toEqual(recipeDtoExample.instructions![i])
        }
    });

    test('recipeToRecipeListingDto', () => {
        const res: RecipeListingDto = recipeMapper.recipeToRecipeListingDto(recipeExample);
        expect(res.name).toEqual(recipeListingDtoExample.name);
        expect(res.totalTime).toEqual(recipeListingDtoExample.totalTime);
    });

    test('recipeDtoToRecipe', () => {
        const res: Recipe = recipeMapper.recipeDtoToRecipe(recipeDtoExample);
        expect(res.name).toEqual(recipeExample.name);
        expect(res.notes).toEqual(recipeExample.notes);
        expect(res.prep_time_hours).toEqual(recipeExample.prep_time_hours);
        expect(res.prep_time_minutes).toEqual(recipeExample.prep_time_minutes);
        expect(res.cook_time_hours).toEqual(recipeExample.cook_time_hours);
        expect(res.cook_time_minutes).toEqual(recipeExample.cook_time_minutes);

        for (let i = 0; i < res.ingredients.length; i++) {
            let ingredient = res.ingredients[i];
            expect(ingredient).toEqual(recipeExample.ingredients[i]);
        }

        for (let i = 0; i < res.instructions.length; i++) {
            let instruction = res.instructions[i];
            expect(instruction).toEqual(recipeExample.instructions[i]);
        }
    });

    test('recipeTorecipeListingDtoOneHour', () => {
        const res: RecipeListingDto = recipeMapper.recipeToRecipeListingDto(recipeOneHourExample);
        expect(res.totalTime).toBe('1 hour');
    })

    test('recipeToRecipeListingDtoOneMinute', () => {
        const res: RecipeListingDto = recipeMapper.recipeToRecipeListingDto(recipeOneMinuteExample);
        expect(res.totalTime).toBe('1 minute');
    })

    test('recipeToRecipeListingDtoMultipleHours', () => {
        const res: RecipeListingDto = recipeMapper.recipeToRecipeListingDto(recipeMultipleHoursExample);
        expect(res.totalTime).toBe('2 hours');
    })
})