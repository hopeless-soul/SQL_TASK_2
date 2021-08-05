const Tasks = require('../models/Tasks');

const taskController = {
    async getTasks(req){
        if(req.query.all){return await new Tasks().getAllTasks(req.params.listId);} 
        else {return await new Tasks().getUncompletedTasks(req.params.listId);}
    },
    async addEntry( req ){ return await new Tasks().addEntry( req.params.listId, req.body.id, req.body.name, new Date(req.body.dueDate), req.body.checked ) },
    async removeEntry( req ){ return await new Tasks().removeEntry( req.params.listId, req.body.id ); },
    async replaceEntry( req ){   return;     },//return await new Tasks().updateEntry( req.params.listName, req.body.id, req.body.newId, req.body.newName, req.body.newDesc, req.body.newChecked ) },
    async updateEntry( req ){    return;     }//return await new Tasks().updateEntry( req.params.listName, req.body.id, req.body.newId, req.body.newName, req.body.newDesc, req.body.newChecked )},
}

module.exports = taskController;