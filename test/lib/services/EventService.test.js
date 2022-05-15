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

});