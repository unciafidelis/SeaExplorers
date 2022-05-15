const OrganizerService = require('../../../lib/services/OrganizerService')

describe('Unit test for Organizer Service', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allOrganizers = await OrganizerService.getAllOrganizers()
        expect(allOrganizers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Organizer', async () => {
        const organizer = await OrganizerService.getOrganizer(1)
        expect(organizer.name).toBe("dalex")
    })
    test('Should insert a new organizer', async () => {
        const data = {
            name: "TestOrganizer",
            username: "testorganizer",
            email: "test@test.com",
            password: "123123"
        }
        const newOrganizer = await OrganizerService.newOrganizer(data)
        expect(newOrganizer.name).toBe("TestOrganizer")
    })
})