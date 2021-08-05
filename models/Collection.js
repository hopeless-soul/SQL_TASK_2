/*
    TODO:
    [X] Cписок задач назначенных на текущий день.
    ||| Для каждой задачи включена информация про название списка, в котором она находиться.
    ||| Для этого использовать eager loading связи к списку. 
*/

const db = require('../db');

class Collection{
    async forToday(){
        return await db.knex('public.t_tasks').select('public.t_tasks.id_task as id', 'public.t_tasks.name_task as name', 'public.t_lists.name_list as list', 'public.t_lists.id_list as listid')
            .innerJoin('public.t_lists', 'public.t_tasks.id_list', 'public.t_lists.id_list')
            .whereBetween('duedate', ['2021-08-05', '2021-08-05'])
    }
}

module.exports = Collection;




// async function f1() {
//     var x = await new Collection().forToday()
//     console.log(x); 
//     console.log("DONE"); 
//   }
// f1();

