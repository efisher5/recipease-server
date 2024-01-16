# Getting Started with Recipease

This is the back-end repository for Recipease, the recipe storage application. The back-end of Recipe Book was built with Node.js, Express, Prisma, and Postgres. The front-end repository can be found [here](https://github.com/efisher5/menu).

This application is currently being hosted on Heroku, with the database hosted on Supabase.

## Available Scripts

| Code | Description |
| ---- | ----- |
| `npm run start` | Runs the app locally |
| `npm run build` | Runs the TypeScript 'tsc' command |
| `npm run prisma:migrate-dev` | Creates Prisma migrations when schema chaanges |
| `npm run prisma:migrtate-reset` | Resets database and re-runs migrations |
| `npm run gen:tsoa` | Takes DTO's and controller files and converts them into openapi.yaml for frontend use |
| `git push heroku main` | Deploys the main branch to Heroku |

## Postgres and pgAdmin

Recipease uses Postgres for its database, version 15.5 to be specific. Using pgAdmin helps with database management. You'll need to set a DATABASE_URL environment variable to ensure proper connection between Postgres and Prisma. To test if the connection works, you can run the `npm run prisma:migrate-reset` command in a terminal. You should see a new database and schema show up. 

## Docker

There are three containers in this repository: postgres, pgadmin, and menu-server. Follow the instructions below to run.

### postgres and pgadmin

The postgres and pgadmin containers can generally be run simultaneously. To run the containers, ensure that

1. Postgres is not running locally on your machine
2. The 'data-pg' and 'data-pgadmin' folders have been removed locally. Only do this if you're making a change to the postgres or pgadmin container image. If you don't remove this, then the old database image will be created.
3. All images and containers related to postgres and pgadmin have been removed.

Once these steps have been complete, all you need to run is:

`docker-compose up postgres pgadmin -d`

### back

Once the postgres and pgadmin containers have been created, the back container can be run with:

`docker-compose up back -d`

### Switching between local development and container development

Note to future self: Ideally, I would like to exclusively develop locally. I would only switch to the container mode once I'm done with the changes, and I'm ready to test container setup locally. I want to do this because developing on containers can be messy sometimes with volumes and tracking changes. Since I'll likely be the only person doing development on this for the forseeable future, I don't mind doing it this way. 

With that being said however, there are some necessary steps when switching between local and container modes.

- front: No need to do anything :) 
- back: If running locally, need to uncomment the first DATABASE_URL variable in .env
- pgAdmin: No need to do anything
- postgres: Make sure to run `brew services stop postgresql` in the terminal to stop the local instance of postgres (if testing the containers)

I'm not putting this note in the front end directory since there are no changes needed.

### Misc.

- When running `docker-compose down` to destroy the containers, remember that this doesn't do anything to the images. If changes to Dockerfile or docker-compose.yaml are made, the images will also need to be deleted.
