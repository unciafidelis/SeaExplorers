const OrganizerController = require('../../../lib/controller/OrganizerController')

describe('Unit test for Member Controller', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allOrganizers = await OrganizerController.getAllOrganizers()
        expect(allOrganizers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Organizer', async () => {
        const organizer = await OrganizerController.getOrganizer(1)
        expect(organizer.name).toBe("Juanito Perez")
    })
})