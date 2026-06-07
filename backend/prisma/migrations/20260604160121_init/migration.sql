-- CreateTable
CREATE TABLE "Analysis" (
    "id" SERIAL NOT NULL,
    "inputText" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tasks" JSONB NOT NULL,
    "events" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);
