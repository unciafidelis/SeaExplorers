const MemberController = require('../../../lib/controller/MemberController')

describe('Unit test for Member Controller', () => {
    test('Should return a bigger value of Member List Length', async () => {
        const allMembers = await MemberController.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
    
})