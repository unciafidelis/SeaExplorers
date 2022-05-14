-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
