const EventService = require('../../../lib/services/EventService')

describe('Unit test for Event Service', () => {
    test('Should return member list length', async () => {
        const events = await EventService.getAllEvents();
        expect(events.length > 0).toBe(true);
    });
    
});