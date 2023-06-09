# Getting Started with Recipe Book Backend

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