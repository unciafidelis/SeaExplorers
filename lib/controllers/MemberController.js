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
    static newMember(member){
        member = MemberService.newMember(member)
        return member
    }
    static updateMember(id, username){
        const updatedMember = MemberService.updateMember(id, username)
        return updatedMember
    }
    static deleteMember(id){
        const deletedMember = MemberService.deleteMember(id)
        return deletedMember
    }
}
module.exports = MemberController