const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MemberService{
    static getAllMembers(){
        const allMembers =  prisma.Member.findMany({});
        console.log(allMembers)
        return allMembers
    }
    static getMember(id){
        const member = prisma.Member.findUnique({where: {id: parseInt(id)}})
        return member 
    }
    static newMember(member){
        return prisma.Member.create({data: member})
    }
    static updateMember(id, username){
        return prisma.Member.update({
            where: {
                id: id
            },
            data: {
                username: username
            }
        });
    }
    static deleteMember(id){
        return prisma.Member.delete({where: {id: id}});
    } 
}
module.exports = MemberService