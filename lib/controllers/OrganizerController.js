const OrganizerService = require('../../lib/services/OrganizerService')

class OrganizerController{
    static getAllOrganizers(){
        const allOrganizers = OrganizerService.getAllOrganizers()
        return allOrganizers
    }
}
module.exports = OrganizerController