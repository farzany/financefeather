-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "percentage" DROP NOT NULL,
ALTER COLUMN "percentage" SET DEFAULT '0';
