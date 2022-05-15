const MemberController = require('../../../lib/controller/MemberController')

describe('Unit test for Member Controller', () => {
    test('Should return a bigger value of Member List Length', async () => {
        const allMembers = await MemberController.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Member', async () => {
        const member = await MemberController.getMember(1)
        expect(member.name).toBe("DianaMagallanes")
    })
})