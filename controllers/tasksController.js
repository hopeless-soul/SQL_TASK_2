const Tasks = require('../models/Tasks');

const taskController = {
    async getTestEntries(){           return await new Tasks().getTestEntries(); },
    async getTables(){                return await new Tasks().getTables(); },
    async getEntriesByName( req ){    return await new Tasks().getEntriesByName( req.query['listName'] ); },
    async addEntry( req ){            return await new Tasks().addEntry( req.query['listName'], req.body.id, req.body.name, req.body.desc, req.body.checked ); },
    async removeEntry( req ){         return await new Tasks().removeEntry( req.query['listName'], req.body.id )  },
    async replaceEntry( req ){        return await new Tasks().updateEntry( req.query['listName'], req.body.id, req.body.newId, req.body.newName, req.body.newDesc, req.body.newChecked ) },
    async updateEntry( req ){         return await new Tasks().updateEntry( req.query['listName'], req.body.id, req.body.newId, req.body.newName, req.body.newDesc, req.body.newChecked )},
}

module.exports = taskController;