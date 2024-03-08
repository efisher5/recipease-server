import { RecipeDto } from "../../src/dtos/recipe.dto";

export const recipeDtoExample: RecipeDto = {
    recipeId: '5e7410ac-4cf0-4613-bf44-890257f4edeb',
    userId: '',
    name: 'Grilled Cheese',
    notes: 'This grilled cheese is fire',
    prepTimeHours: 0,
    prepTimeMinutes: 5,
    cookTimeHours: 0,
    cookTimeMinutes: 20,
    instructions:
        'Dice the onions\n' +
        'Shred the cheese\n' +
        'Cook onions on medium low for 10 minutes\n' +
        'Mix cheese and onions. Put on bread and cook on each side for 5 minutes\n'
    ,
    ingredients: 
        'Onions\n' +
        'Cheese\n' +
        'Butter\n' +
        'Bread\n' +
        'Salt\n' +
        'Black Pepper'
}