export class RecipeListingDto {
    /**
     * The id of the recipe
     * @type {string}
     * @memberof RecipeListingDto
     */
    'recipeId'?: string;
    /**
     * The name of the recipe
     * @type {string}
     * @memberof RecipeListingDto
     */
    'name'?: string;
    /**
     * The total time for the recipe
     * @type {string}
     * @memberof RecipeListingDto
     */
    'totalTime'?: string;
    /**
     * The timestamp of when the recipe was created
     * @type {Date}
     * @memberof RecipeListingDto
     */
    'createdTs'?: Date;
}