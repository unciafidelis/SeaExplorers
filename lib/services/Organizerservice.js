const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class OrganizerService{
    static getAllOrganizers(){
        const allOrganizers =  prisma.Organizer.findMany({});
        return allOrganizers
    }
    static getOrganizer(id){
        const organizer = prisma.Organizer.findUnique({where: {id: parseInt(id)}})
        return organizer 
    }
}
module.exports = OrganizerService