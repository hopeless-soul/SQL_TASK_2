const db = require('../db');



class Tasks {
    async getUncompletedTasks( listId ){ 
        return await db.knex.select('public.t_tasks.id_task as id', 'public.t_tasks.name_task as name', 'public.t_tasks.checked')
            .from('public.t_tasks').where({'checked': false, 'public.t_tasks.id_list': listId})
    }
    async getAllTasks( listId ){
        return await db.knex.select('public.t_tasks.id_task as id', 'public.t_tasks.name_task as name', 'public.t_tasks.checked')
            .from('public.t_tasks').where('public.t_tasks.id_list',listId)
    }
    async addEntry( listId, taskId, taskName, dueDate, isChecked ){
        return await db.knex('public.t_tasks').insert({'id_list': listId, 'name_task': taskName, 'duedate': `${dueDate.getFullYear()}-${dueDate.getMonth()}-${dueDate.getDate()}`, 'id_task': taskId, 'checked': isChecked})
    }
    async removeEntry( listId, taskId ){
        return await db.knex('public.t_tasks').where({'public.t_tasks.id_list' : listId , 'public.t_tasks.id_task' : taskId }).del();   
    }
    async updateEntry( tableName, id, newId=undefined, name=undefined, desc=undefined, isChecked=undefined ){
        // let str = 'UPDATE ' + tableName + ' SET ' +  
        //     `${newId != undefined ? `id = ${newId} ` : ''} ` + 
        //     `${name != undefined ? ` , name = '${name}', ` : ''} ` + 
        //     `${desc != undefined ? ` , description = '${desc}', ` : ''} ` + 
        //     `${isChecked != undefined ? `checked = ${isChecked} ` : ''} ` + 
        //     ' WHERE id = $1'; 
        // const { rows } = await db.poolTasks.query(str, [id]);
        // return rows;
    }
    
}

module.exports = Tasks; 



// async function f1() {
//     var x = await new Tasks().addEntry(2,5,"NEW", new Date(), false)
//     console.log(x); 
//     var y = await new Tasks().getAllTasks(2)
//     console.log(y); 
//     x = await new Tasks().removeEntry(2,5)
//     console.log(x); 
//     y = await new Tasks().getAllTasks(2)
//     console.log(y); 

//     console.log("DONE"); 
//   }
// f1();


