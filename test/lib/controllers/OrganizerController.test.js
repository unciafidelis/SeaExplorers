const OrganizerController = require('../../../lib/controllers/OrganizerController')

describe('Unit test for Organizer Controller', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allOrganizers = await OrganizerController.getAllOrganizers()
        expect(allOrganizers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Organizer', async () => {
        const organizer = await OrganizerController.getOrganizer(1)
        expect(organizer.name).toBe("Juanito Perez")
    })
    test('Should insert a new Organizer', async () => {
        const data = {
            name: "TestController",
            username: "test",
            email: "test@test.com",
            password: "123123"
        }
        const newOrganizer = await OrganizerController.newOrganizer(data)
        expect(newOrganizer.name).toBe("TestController")
    })
    test('Should update organizers username', async () => {
        const id = 1
        const username = "userNameTestController"
        const updatedOrganizer = await OrganizerController.updateOrganizer(id, username)
        expect(updatedOrganizer.username).toBe("userNameTestController")
    })
    test('Should delete a especific organizer', async () => {
        await OrganizerService.deleteOrganizer(11)
        const organizer = await Organizercontroller.getOrganizer(11)
        expect(organizer).toBe(null)
    })
})