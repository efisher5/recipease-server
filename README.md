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