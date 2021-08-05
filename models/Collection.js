/*
    TODO:
    [X] Cписок задач назначенных на текущий день.
    ||| Для каждой задачи включена информация про название списка, в котором она находиться.
    ||| Для этого использовать eager loading связи к списку. 
*/

const db = require('../db');

class Collection{
    async forToday(){
        let result;
        await db.poolTasks.query(
            "SELECT public.t_tasks.id_task AS id, public.t_tasks.name_task AS name, public.t_lists.name_list AS list, public.t_lists.id_list AS listid " +
            "FROM public.t_tasks " +
            "INNER JOIN public.t_lists ON public.t_tasks.id_list = public.t_lists.id_list " +
            "WHERE duedate BETWEEN '2021-08-05' AND '2021-08-05' "
        ).then(res=>result=res.rows)
        return result;
    }
}

module.exports = Collection;




// async function f1() {
//     var x = await new Collection().forToday()
//     console.log(x); 
//     console.log("DONE"); 
//   }
// f1();

