const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EventService{ 
    static getAllEvents(){
        const allEvents =  prisma.Event.findMany({});
        return allEvents
    }
    static getEvent(id){
        const Event = prisma.Event.findUnique({where: {id: parseInt(id)}})
        return Event 
    }
}
module.exports = EventService