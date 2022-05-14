const MemberService = require('../../../lib/services/MemberService')

describe('Unit test for Member Service', () => {
    test('Should return a bigger value of Member List Length', () => {
        expect(MemberService.getAllMembers().length > 0).toBe(true)
    } )
})