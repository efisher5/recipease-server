export class RecipeDto {
    /**
     * The id of the recipe
     * @type {string}
     * @memberof RecipeDto
     */
    'recipeId'?: string;
    /**
     * The id of the user associated with the recipe
     * @type {string}
     * @memberof RecipeDto
     */
    'userId'?: string;
    /**
     * The name of the recipe
     * @type {string}
     * @memberof RecipeDto
     */
    'name'?: string;
    /**
     * The detailed description of the recipe
     * @type {string}
     * @memberof RecipeDto
     */
    'recipeDescription'?: string;
    /**
     * The prep time for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'prepTime'?: number;
    /**
     * The cook time for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'cookTime'?: number;
    /**
     * The ingredients for the recipe
     * @type {Array<string>}
     * @memberof RecipeDto
     */
    'ingredients'?: Array<string>;
    /**
     * The instructions for the recipe
     * @type {Array<string>}
     * @memberof RecipeDto
     */
    'instructions'?: Array<string>;
}