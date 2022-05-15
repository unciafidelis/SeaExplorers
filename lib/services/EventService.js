const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EventService{ 
    static getAllEvents(){
        const allEvents =  prisma.Event.findMany({});
        return allEvents
    }
}
module.exports = EventService