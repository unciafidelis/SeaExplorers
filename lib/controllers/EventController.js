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
    static updateEvent(id, username){
        const updatedEvent = EventService.updateEvent(id, username)
        return updatedEvent
    }
    static deleteEvent(id){
        const deletedEvent = EventService.deleteEvent(id)
        return deletedEvent
    }
}
module.exports = EventController