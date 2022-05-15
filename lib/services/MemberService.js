const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MemberService{
    static getAllMembers(){
        const allMembers =  prisma.Member.findMany({});
        console.log(allMembers)
        return allMembers
    }
     
}
module.exports = MemberService