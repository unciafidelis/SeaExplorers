const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class OrganizerService{
    static getAllOrganizers(){
        const allOrganizers =  prisma.Organizer.findMany({});
        return allOrganizers
    }

}
module.exports = OrganizerService