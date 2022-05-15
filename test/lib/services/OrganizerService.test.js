const MemberService = require('../../../lib/services/MemberService')

describe('Unit test for Organizer Service', () => {
    test('Should return a bigger value of Organizer List Length', async () => {
        const allMembers = await MemberService.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
})