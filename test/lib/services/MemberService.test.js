const MemberService = require('../../../lib/services/MemberService')

describe('Unit test for Member Service', () => {
    test('Should return a bigger value of Member List Length', async () => {
        const allMembers = await MemberService.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
})