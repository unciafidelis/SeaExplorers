const OrganizerService = require('../../lib/services/OrganizerService')

class OrganizerController{
    static getAllOrganizers(){
        const allOrganizers = OrganizerService.getAllOrganizers()
        return allOrganizers
    }
    static getOrganizer(id){
        const organizer = OrganizerService.getOrganizer(id)
        return organizer 
    }
}
module.exports = OrganizerController