import { recipe as Recipe } from "@prisma/client";

// Basic recipe
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

// Recipe where total cook time adds up to an hour
export const recipeOneHourExample: Recipe = {
    id: '84ef4e51-0e69-4e47-99e4-c203bf98d171',
    user_id: "",
    name: "Grilled Cheese",
    notes: "This grilled cheese is fire",
    prep_time_hours: 0,
    prep_time_minutes: 30,
    cook_time_hours: 0,
    cook_time_minutes: 30,
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

// Recipe where total cook time adds up to one minute
export const recipeOneMinuteExample: Recipe = {
    id: '88bf744d-90d9-4cea-b4e6-4ab5074eb38b',
    user_id: "",
    name: "Grilled Cheese",
    notes: "This grilled cheese is fire",
    prep_time_hours: 0,
    prep_time_minutes: 0,
    cook_time_hours: 0,
    cook_time_minutes: 1,
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

// Recipe where cook time is over one hour and total cook time is multiple hours
export const recipeMultipleHoursExample: Recipe = {
    id: 'ed7b8a4f-9069-4c31-a311-67d4a0bd4432',
    user_id: "",
    name: "Grilled Cheese",
    notes: "This grilled cheese is fire",
    prep_time_hours: 1,
    prep_time_minutes: 35,
    cook_time_hours: 0,
    cook_time_minutes: 25,
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
