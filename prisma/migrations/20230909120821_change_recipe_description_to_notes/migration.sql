/*
  Warnings:

  - You are about to drop the column `description` on the `recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "description",
ADD COLUMN     "notes" TEXT;
