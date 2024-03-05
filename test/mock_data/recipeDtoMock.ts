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
    ingredients: [
        'Onions',
        'Cheese',
        'Butter',
        'Bread',
        'Salt',
        'Black Pepper'
    ],
    instructions: [
        'Dice the onions',
        'Shred the cheese',
        'Cook onions on medium low for 10 minutes',
        'Mix cheese and onions. Put on bread and cook on each side for 5 minutes'
    ]
}