import * as express from 'express';
import { recipe as Recipe, user as User } from '@prisma/client';

import { Body, Controller, Delete, Get, Path, Post, Put, Route, Request, SuccessResponse } from "tsoa";
import RecipeService from '../services/recipe.service';
import { RecipeDto } from '../dtos/recipe.dto';
import { RecipeListingDto } from '../dtos/recipeListing.dto';
import RecipeMapper from '../mappers/recipe.mapper';
import UserMapper from '../mappers/user.mapper';
import { UserDto } from '../dtos/user.dto';
import UserService from '../services/user.service';

@Route("/recipes")
export class RecipeController extends Controller {
    private recipeService: RecipeService = new RecipeService();
    private recipeMapper: RecipeMapper = new RecipeMapper();
    private userMapper: UserMapper = new UserMapper();
    private userService: UserService = new UserService();

    @Get("/")
    @SuccessResponse("200", "OK")
    public async getRecipes(@Request() request: express.Request): Promise<RecipeListingDto[]> {
        const recipes: Recipe[] = await this.recipeService.findRecipes();
        return recipes.map((recipe) => this.recipeMapper.recipeToRecipeListingDto(recipe));
    }

    @Get("/{recipeId}")
    @SuccessResponse("200", "OK")
    public async getRecipe(@Request() request: express.Request, @Path() recipeId: string): Promise<RecipeDto> {
        const recipe: Recipe = await this.recipeService.getRecipeById(recipeId);
        return this.recipeMapper.recipeToRecipeDto(recipe);
    }

    @Post("/blank")
    @SuccessResponse("201", "Created")
    public async createBlankRecipie(): Promise<RecipeDto> {
        const requestUser = this.userMapper.userDtoToUser(await this.userService.findUser('monsterK@admin.com'));
        const recipe: Recipe = await this.recipeService.createRecipe(requestUser);
        return this.recipeMapper.recipeToRecipeDto(recipe);
    }

    @Put("/{recipeId}")
    @SuccessResponse("200", "OK")
    public async updateRecipe(@Path() recipeId: string, @Body() recipeDto: RecipeDto): Promise<RecipeDto> {
        const requestUser = this.userMapper.userDtoToUser(await this.userService.findUser('monsterK@admin.com'));
        
        const recipe: Recipe = this.recipeMapper.recipeDtoToRecipe(recipeDto);
        return this.recipeMapper.recipeToRecipeDto(await this.recipeService.updateRecipe(recipeId, recipe, requestUser));
    }

    @Delete("/{recipeId}")
    @SuccessResponse("204", "No Content")
    public async deleteRecipe(@Request() request: express.Request, @Path() recipeId: string): Promise<void> {
        await this.recipeService.deleteRecipe(recipeId);
    }
}