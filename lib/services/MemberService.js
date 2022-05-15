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
}
module.exports = MemberService