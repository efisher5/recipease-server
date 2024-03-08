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
    ,
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
    ,
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
    ,
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
    ,
    created_ts: new Date("2024-02-16T12:00.00.000Z"),
    created_by: "test@test.com",
    updated_ts: null,
    updated_by: null
}
