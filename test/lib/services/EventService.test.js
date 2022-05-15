const EventService = require('../../../lib/services/EventService')

describe('Unit test for Event Service', () => {
    test('Should return member list length', async () => {
        const events = await EventService.getAllEvents();
        expect(events.length > 0).toBe(true);
    });
    test('Should return name of event', async () => {
        const events = await EventService.getEvent(1);
        expect(events.name).toBe("Ataque Pirata");
    });

    test('Should return name of added event', async () => {
        const events = await EventService.newEvent(
        {"name": "Un test service",
        "activity": "test act",
        "location": "test location",
        "type": "playero",
        "personQuota": 10,
        "organizer": "Juanito Perez"});
        expect(events.name).toBe("Un test service");
    });
    
    test('Should return updated activity', async () => {
        const events = await EventService.updateEvent(8,"actualizacion de act");
        expect(events.activity).toBe("actualizacion de act");
    });

    test('Should return id of deleted event', async () => {
        const events = await EventService.deleteEvent(5);
        expect(events.id).toBe(5);
    });  

});