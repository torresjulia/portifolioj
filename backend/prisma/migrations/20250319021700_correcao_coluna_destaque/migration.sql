/*
  Warnings:

  - You are about to drop the column `detaque` on the `tecnologias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "detaque",
ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false;
