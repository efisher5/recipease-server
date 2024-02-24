import { describe, expect, test, jest } from '@jest/globals';
import { RecipeDto } from '../../../src/dtos/recipe.dto';
import { RecipeListingDto } from '../../../src/dtos/recipeListing.dto';
import RecipeRepository from '../../../src/repository/recipe.repository';
import RecipeService from '../../../src/services/recipe.service';
import { recipeExample } from '../../mock_data/recipeMock';
import { recipeDtoExample } from '../../mock_data/recipeDtoMock';
import { recipeListingDtoExample } from '../../mock_data/recipeListingDtoMock';
import { userExample } from '../../mock_data/userMock';

jest.mock('../../../src/repository/recipe.repository');

describe('Test Recipe Service', () => {
    const recipeService: RecipeService = new RecipeService();

    test('findRecipes', async () => {
        (RecipeRepository.prototype.findAllRecipes as jest.Mock).mockReturnValue(new Array(recipeListingDtoExample));
        const res: RecipeListingDto[] = await recipeService.findRecipes(userExample.id);
        expect(RecipeRepository.prototype.findAllRecipes).toBeCalledTimes(1);
        expect(res.length).toBe(1);
    })

    test('findRecipes error when user id not found', async () => {

    })

    test('getRecipeById', async () => {
        (RecipeRepository.prototype.findRecipeById as jest.Mock).mockReturnValueOnce(recipeExample);
        const res: RecipeDto = await recipeService.getRecipeById(recipeExample.id);
        
        expect(RecipeRepository.prototype.findRecipeById).toBeCalledTimes(1)
        expect(res.recipeId).toEqual(recipeExample.id);
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
    })

    test('getRecipeById error when recipe not found', async () => {

    })

    test('createRecipe', async () => {
        (RecipeRepository.prototype.createRecipe as jest.Mock).mockReturnValueOnce(recipeExample);
        const res: RecipeDto = await recipeService.createRecipe(userExample);

        expect(RecipeRepository.prototype.createRecipe).toBeCalledTimes(1);
    })

    test('updateRecipe', async () => {
        (RecipeRepository.prototype.updateRecipe as jest.Mock).mockReturnValueOnce(recipeExample);
        recipeExample.name = 'Couscous Pilaf';
        recipeExample.notes = 'This is actually a recipe for couscous pilaf';
        recipeExample.cook_time_hours = 1;
        const res: RecipeDto = await recipeService.updateRecipe(recipeExample.id, recipeExample, userExample);

        expect(RecipeRepository.prototype.updateRecipe).toBeCalledTimes(1);
        expect(res.name).toBe('Couscous Pilaf');
        expect(res.notes).toBe('This is actually a recipe for couscous pilaf');
        expect(res.cookTimeHours).toBe(1)
    })

    test('updateRecipe error when recipe not found', async () => {

    })

    test('deleteRecipe', async () => {
        (RecipeRepository.prototype.deleteRecipe as jest.Mock).mockReturnValueOnce(204);
        const res: any = await recipeService.deleteRecipe(recipeDtoExample.recipeId!);

        expect(RecipeRepository.prototype.deleteRecipe).toBeCalledTimes(1);
    })

    test('deleteREcipe error when recipe not found', async () => {

    })
})