/*
  Warnings:

  - You are about to drop the column `userId` on the `comments` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;
