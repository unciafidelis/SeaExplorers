const OrganizerService = require('../../../lib/services/OrganizerService')

describe('Unit test for Organizer Service', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allOrganizers = await OrganizerService.getAllOrganizers()
        expect(allOrganizers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Organizer', async () => {
        const organizer = await OrganizerService.getOrganizer(1)
        expect(organizer.name).toBe("Juanito Perez")
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
    test('Should update organizers username', async () => {
        const id = 1
        const username = "userNameTest"
        const updatedOrganizer = await OrganizerService.updateOrganizer(id, username)
        expect(updatedOrganizer.username).toBe("userNameTest")
    })
    test('Should delete a especific organizer', async () => {
        await OrganizerService.deleteOrganizer(11)
        const organizer = await OrganizerService.getOrganizer(11)
        expect(organizer).toBe(null)
    })
})