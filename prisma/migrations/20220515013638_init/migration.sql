/*
  Warnings:

  - Changed the type of `personQuota` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "personQuota",
ADD COLUMN     "personQuota" INTEGER NOT NULL;
