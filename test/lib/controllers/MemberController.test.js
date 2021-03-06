const MemberController = require('../../../lib/controllers/MemberController')

describe('Unit test for Member Controller', () => {
    test('Should return a bigger value of Member List Length', async () => {
        const allMembers = await MemberController.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Member', async () => {
        const member = await MemberController.getMember(1)
        expect(member.name).toBe("DianaMagallanes")
    })
    test('Should insert a new member', async () => {
        const data = {
            name: "Test",
            username: "test",
            email: "test@test.com",
            password: "123123"
        }
        const newMember = await MemberController.newMember(data)
        expect(newMember.name).toBe("Test")
    })
    test('Should update members username', async () => {
        const id = 1
        const username = "userNameTestController"
        const updatedMember = await MemberController.updateMember(id, username)
        expect(updatedMember.username).toBe("userNameTestController")
    })
    test('Should delete a especific member', async () => {
        await MemberService.deleteMember(11)
        const member = await MemberController.getMember(11)
        expect(member).toBe(null)
    })
})