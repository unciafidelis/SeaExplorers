const EventService = require('../../lib/services/EventService')

class EventController{
    static getAllEvents(){
        const allEvents = EventService.getAllEvents()
        return allEvents
    }
    
}
module.exports = EventController