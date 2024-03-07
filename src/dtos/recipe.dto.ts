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
     * The notes for the recipe
     * @type {string}
     * @memberof RecipeDto
     */
    'notes'?: string;
    /**
     * The prep time hours for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'prepTimeHours'?: number;
    /**
     * The prep time minutes for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'prepTimeMinutes'?: number;
    /**
     * The cook time hours for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'cookTimeHours'?: number;
    /**
     * The cook time minutes for the recipe
     * @type {number}
     * @memberof RecipeDto
     */
    'cookTimeMinutes'?: number;
    /**
     * The ingredients for the recipe
     * @type {Array<string>}
     * @memberof RecipeDto
     */
    'ingredients'?: string;
    /**
     * The instructions for the recipe
     * @type {Array<string>}
     * @memberof RecipeDto
     */
    'instructions'?: string;
}