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
        const requestUser: User = <User>request.user;
        const user = await this.userService.findUser(requestUser.id);
        const recipes: Recipe[] = await this.recipeService.findRecipes(user);
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
    public async createBlankRecipie(@Request() request: express.Request): Promise<RecipeDto> {
        const requestUser: User = <User>request.user;
        const user = await this.userService.findUser(requestUser.id);
        const recipe: Recipe = await this.recipeService.createRecipe(user);
        return this.recipeMapper.recipeToRecipeDto(recipe);
    }

    @Put("/{recipeId}")
    @SuccessResponse("200", "OK")
    public async updateRecipe(@Request() request: express.Request, @Path() recipeId: string, @Body() recipeDto: RecipeDto): Promise<RecipeDto> {
        const requestUser: User = <User>request.user;
        const user = await this.userService.findUser(requestUser.id);
        const recipe: Recipe = this.recipeMapper.recipeDtoToRecipe(recipeDto);
        return this.recipeMapper.recipeToRecipeDto(await this.recipeService.updateRecipe(recipeId, recipe, user));
    }

    @Delete("/{recipeId}")
    @SuccessResponse("204", "No Content")
    public async deleteRecipe(@Request() request: express.Request, @Path() recipeId: string): Promise<void> {
        await this.recipeService.deleteRecipe(recipeId);
    }
}