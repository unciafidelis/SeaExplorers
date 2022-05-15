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
    static newOrganizer(organizer){
        return prisma.Organizer.create({data: organizer})
    }
    static updateOrganizer(id, username){
        return prisma.Organizer.update({
            where: {
                id: id
            },
            data: {
                username: username
            }
        });
    }
    static deleteOrganizer(id){
        return prisma.Organizer.delete({where: {id: id}});
    }  
}
module.exports = OrganizerService