-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "activity" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "personQuota" VARCHAR(255) NOT NULL,
    "organizer" VARCHAR(255) NOT NULL,
    "onlyMembers" VARCHAR(255) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "pasword" VARCHAR(255) NOT NULL,

    CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id")
);
