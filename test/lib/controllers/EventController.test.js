const EventController = require('../../../lib/controllers/EventController')

describe('Unit test for Event Controller', () => {
    test('Should return member list length', async () => {
        const events = await EventController.getAllEvents();
        expect(events.length > 0).toBe(true);
    });  

});