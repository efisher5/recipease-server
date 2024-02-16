import { recipe as Recipe } from "@prisma/client";

export const recipeExample: Recipe = {
    id: '00a79510-e190-42d8-a215-8a43be48be81',
    user_id: "",
    name: "Grilled Cheese",
    notes: "This grilled cheese is fire",
    prep_time_hours: 0,
    prep_time_minutes: 5,
    cook_time_hours: 0,
    cook_time_minutes: 20,
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
    ],
    created_ts: new Date("2024-02-16T12:00.00.000Z"),
    created_by: "test@test.com",
    updated_ts: null,
    updated_by: null
}