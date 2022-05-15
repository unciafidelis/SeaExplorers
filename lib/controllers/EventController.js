const EventService = require('../../lib/services/EventService')

class EventController{
    static getAllEvents(){
        const allEvents = EventService.getAllEvents()
        return allEvents
    }
    static getEvent(id){
        const event = EventService.getEvent(id)
        return event 
    }
    static newEvent(event){
        const newevent = EventService.newEvent(event)
        return newevent
    }
}
module.exports = EventController