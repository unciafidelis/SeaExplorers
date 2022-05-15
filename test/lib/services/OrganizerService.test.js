const OrganizerService = require('../../../lib/services/OrganizerService')

describe('Unit test for Organizer Service', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allOrganizers = await OrganizerService.getAllMembers()
        expect(allOrganizers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Organizer', async () => {
        const organizer = await OrganizerService.getMember(1)
        expect(organizer.name).toBe("dalex")
    })
})