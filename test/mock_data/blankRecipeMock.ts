import { recipe as Recipe } from "@prisma/client";

export const blankRecipeExample: Recipe = {
    id: 'c24ea86d-3578-44c0-8c31-6f07cbaaa5fd',
    user_id: "",
    name: "",
    notes: null,
    prep_time_hours: 0,
    prep_time_minutes: 0,
    cook_time_hours: 0,
    cook_time_minutes: 0,
    ingredients: [],
    instructions: [],
    created_ts: new Date("2024-02-16T12:00.00.000Z"),
    created_by: "",
    updated_ts: null,
    updated_by: null
}