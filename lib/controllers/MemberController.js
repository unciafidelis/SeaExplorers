const MemberService = require('../../lib/services/MemberService')

class MemberController{
    static getAllMembers(){
        const allMembers = MemberService.getAllMembers()
        return allMembers
    }
    static getMember(id){
        const member = MemberService.getMember(id)
        return member 
    }
}
module.exports = MemberController