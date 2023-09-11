/*
  Warnings:

  - You are about to drop the column `cook_time` on the `recipe` table. All the data in the column will be lost.
  - You are about to drop the column `prep_time` on the `recipe` table. All the data in the column will be lost.
  - Added the required column `cook_time_hours` to the `recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cook_time_minutes` to the `recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prep_time_hours` to the `recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prep_time_minutes` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "cook_time",
DROP COLUMN "prep_time",
ADD COLUMN     "cook_time_hours" INTEGER NOT NULL,
ADD COLUMN     "cook_time_minutes" INTEGER NOT NULL,
ADD COLUMN     "prep_time_hours" INTEGER NOT NULL,
ADD COLUMN     "prep_time_minutes" INTEGER NOT NULL;
