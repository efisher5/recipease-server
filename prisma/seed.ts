import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

async function main() {
    // const monsterK = await prisma.user.upsert({
    //     where: { email: 'monsterK@admin.com' },
    //     update: {},
    //     create: {
    //         email: 'monsterK@admin.com',
    //         first_name: 'Monster',
    //         last_name: 'Karma',
    //         password: 'pass1234',
    //         recipes: {
    //             create: [
    //                 {
    //                     name: 'Chili Crisp Fettucine Alfredo',
    //                     description: '',
    //                     prep_time_hours: 0,
    //                     prep_time_minutes: 5,
    //                     cook_time_hours: 0,
    //                     cook_time_minutes: 20,
    //                     ingredients: [
    //                         '1lb fettucine',
    //                         '1 cup heavy cream',
    //                         '5oz spinach',
    //                         '2tbsp chili crisp',
    //                         '4tbsp butter',
    //                         '3/4 cup parmesan',
    //                         'salt'
    //                     ],
    //                     instructions: [
    //                         'Begin to boil a pot of water. While water is heating, melt butter with chili crisp in a skillet. Whisk cream in and keep heat low.',
    //                         'Cook fettucine according to instructions. Drain when cooked, keep some pasta water',
    //                         'Combine pasta and sauce together. Add spinach and toss until combined',
    //                         'Add parmesan and toss, keeping heat low. Everything should be slicked in sauce. Use pasta water is sauce needs to be loosened',
    //                         'Add more parmesan/chili crisp to serve'
    //                     ],
    //                     created_by: 'Monster K'
    //                 },
    //                 {
    //                     name: 'Apricot Couscous Pilaf',
    //                     description: '',
    //                     prep_time_hours: 0,
    //                     prep_time_minutes: 10,
    //                     cook_time_hours: 0,
    //                     cook_time_minutes: 15,
    //                     ingredients: [
    //                         'Box of instant couscous',
    //                         '1/2 cup diced red bell pepper',
    //                         '16oz can of apricot halves',
    //                         '1/2 cup sliced green onions',
    //                         '1/2tbsp butter',
    //                         '1/2tbsp vegetable oil',
    //                         'cumin',
    //                         'coriander',
    //                         'salt',
    //                         'pepper'
    //                     ],
    //                     instructions: [
    //                         'Cook couscous as directed on package',
    //                         'Melt butter and oil over medium-high heat',
    //                         'Stir in onions, bell pepper, and cumin. Saute for 5 minutes',
    //                         'Add apricots, salt, and pepper. Cook 1 min',
    //                         'Stir in couscous until combined. Add coriander and other spices as needed.'
    //                     ],
    //                     created_by: 'Monster K'
    //                 },
    //                 {
    //                     name: 'Cornbread',
    //                     description: '',
    //                     prep_time_hours: 0,
    //                     prep_time_minutes: 20,
    //                     cook_time_hours: 0,
    //                     cook_time_minutes: 40,
    //                     ingredients: [
    //                         '3 eggs',
    //                         '1 cup sour cream',
    //                         '1/4 cup melted butter',
    //                         '2tbsp honey',
    //                         '1/4 cup sugar',
    //                         '15oz creamed corn',
    //                         '2tsp baking powder',
    //                         '1/2tsp salt',
    //                         '1.25 cup flour',
    //                         '3/4 cup yellow cornmeal'
    //                     ],
    //                     instructions: [
    //                         'Preheat oven to 375 degrees and grease a 10" skillet',
    //                         'In a large bowl, combine eggs, butter, sour cream, and honey until smooth. Then add sugar, creamed corn, salt, and baking powder. Mix to combine.',
    //                         'Mix cornmeal, then flour',
    //                         'Transfer to skillet and bake 40-45 minutes'
    //                     ],
    //                     created_by: 'Monster K'
    //                 },
    //             ]
    //         }
    //     }
    // })

    // console.log(monsterK)
}

main()
    .then(async () => {
        await prisma.$disconnect;
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect;
    })