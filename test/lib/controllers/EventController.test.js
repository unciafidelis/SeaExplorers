const EventController = require('../../../lib/controllers/EventController')

describe('Unit test for Event Controller', () => {
    test('Should return event list length', async () => {
        const events = await EventController.getAllEvents();
        expect(events.length > 0).toBe(true);
    });  
    test('Should return name of event', async () => {
        const events = await EventController.getEvent(1);
        expect(events.name).toBe("Ataque Pirata");
    });
    test('Should return name of added event', async () => {
        const events = await EventController.newEvent(
        {"name": "Salvemos la vaquita marina",
        "activity": "Veamos a las vaquitas marinas en su habitat natural y limpiemos su casa",
        "location": "Ensenada, Baja California",
        "type": "Evento de buceo",
        "personQuota": 15,
        "organizer": "Juanito Perez"});
        expect(events.name).toBe("Salvemos la vaquita marina");
    });
    test('Should return updated activity', async () => {
        const events = await EventController.updateEvent(2,"Conozcamos a las vaquitas marinas en su habitat natural y limpiemos su casa");
        expect(events.activity).toBe("Conozcamos a las vaquitas marinas en su habitat natural y limpiemos su casa");
    });
    test('Should return id of deleted event', async () => {
        const events = await EventController.deleteEvent(5);
        expect(events.id).toBe(5);
    });
});