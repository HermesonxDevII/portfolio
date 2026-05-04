/*
  Warnings:

  - You are about to drop the column `highlight` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `projects` table. All the data in the column will be lost.
  - Added the required column `type` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "highlight",
DROP COLUMN "slug",
DROP COLUMN "tags",
DROP COLUMN "thumbnail",
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "link" DROP NOT NULL;
