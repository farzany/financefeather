-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "value" DROP NOT NULL,
ALTER COLUMN "depositFrequency" DROP NOT NULL,
ALTER COLUMN "depositValue" DROP NOT NULL;