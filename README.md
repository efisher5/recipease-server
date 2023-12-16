# Getting Started with Recipease

The backend of Recipe Book was built with Node.js, Express, Prisma, and Postgres.

## Available Scripts

| Code | Description |
| ---- | ----- |
| `npm run start` | Runs the app locally |
| `npm run build` | Runs the TypeScript 'tsc' command |
| `npm run prisma:migrate-dev` | Creates Prisma migrations when schema chaanges |

## Notes

For whatever reason, the prisma seed script does not like the project using modules. Remove "type: modules" from package.json when running seed or reset scripts.

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
