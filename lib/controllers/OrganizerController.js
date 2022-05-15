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
    static newOrganizer(organizer){
        organizer = OrganizerService.newOrganizer(organizer)
        return organizer
    }
    static updateOrganizer(id, username){
        const updatedOrganizer = OrganizerService.updateOrganizer(id, username)
        return updatedOrganizer
    }
}
module.exports = OrganizerController