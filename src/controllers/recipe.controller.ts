import * as express from 'express';
import { recipe as Recipe} from '@prisma/client';
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Request, SuccessResponse } from "tsoa";
import RecipeService from '../services/recipe.service';
import { RecipeDto } from '../dtos/recipe.dto';
import { RecipeListingDto } from '../dtos/recipeListing.dto';
import RecipeMapper from '../mappers/recipe.mapper';

@Route("/recipes")
export class RecipeController extends Controller {
    private recipeService: RecipeService = new RecipeService();
    private recipeMapper: RecipeMapper = new RecipeMapper();

    @Get("/")
    @SuccessResponse("200", "OK")
    public async getRecipes(@Request() request: express.Request): Promise<RecipeListingDto[]> {
        const reqUser = request.userInfo;
        return await this.recipeService.findRecipes(reqUser.id);
    }

    @Get("/{recipeId}")
    @SuccessResponse("200", "OK")
    public async getRecipe(@Request() request: express.Request, @Path() recipeId: string): Promise<RecipeDto> {
        return await this.recipeService.getRecipeById(recipeId);
    }

    @Post("/blank")
    @SuccessResponse("201", "Created")
    public async createBlankRecipie(@Request() request: express.Request): Promise<RecipeDto> {
        const reqUser = request.userInfo;
        return await this.recipeService.createRecipe(reqUser);
    }

    @Put("/{recipeId}")
    @SuccessResponse("200", "OK")
    public async updateRecipe(@Request() request: express.Request, @Path() recipeId: string, @Body() recipeDto: RecipeDto): Promise<RecipeDto> {
        const reqUser = request.userInfo;
        const recipe: Recipe = this.recipeMapper.recipeDtoToRecipe(recipeDto);
        return await this.recipeService.updateRecipe(recipeId, recipe, reqUser);
    }

    @Delete("/{recipeId}")
    @SuccessResponse("204", "No Content")
    public async deleteRecipe(@Request() request: express.Request, @Path() recipeId: string): Promise<void> {
        await this.recipeService.deleteRecipe(recipeId);
    }
}