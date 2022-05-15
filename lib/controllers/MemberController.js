const MemberService = require('../../lib/services/MemberService')

class MemberController{
    static getAllMembers(){
        const allMembers = MemberService.getAllMembers()
        return allMembers
    }
}
module.exports = MemberController