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
});