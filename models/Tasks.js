const db = require('../db');

class Tasks {
    async getUncompletedTasks( listId ){ 
        const { rows } = await db.poolTasks.query(
            "SELECT public.t_tasks.id_task AS id, public.t_tasks.name_task AS name, public.t_tasks.checked " +
            "FROM public.t_tasks " +
            "WHERE checked = false AND public.t_tasks.id_list=$1 ", [listId]
        );
        return rows;
    }
    async getAllTasks( listId ){
        const { rows } = await db.poolTasks.query(
            "SELECT public.t_tasks.id_task AS id, public.t_tasks.name_task AS name, public.t_tasks.checked " +
            "FROM public.t_tasks " +
            "WHERE public.t_tasks.id_list=$1 ", [listId]
        );
        return rows;
    }
    async addEntry( listId, taskId, taskName, dueDate, isChecked ){
        const { rows } = await db.poolTasks.query(
            "INSERT INTO public.t_tasks " +
            "VALUES ( $1, $2, $3, $4, $5  ) ", [taskId, taskName, dueDate, listId, isChecked]
        )
        return rows;
    }
    async removeEntry( listId, taskId ){
        const { rows } = await db.poolTasks.query(
            "DELETE FROM public.t_tasks " +
            "WHERE public.t_tasks.id_list = $1 AND public.t_tasks.id_task = $2 ", [listId, taskId]
        )
        return rows;   
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


