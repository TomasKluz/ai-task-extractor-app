-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "sourceType" TEXT NOT NULL DEFAULT 'other',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Untitled analysis';
