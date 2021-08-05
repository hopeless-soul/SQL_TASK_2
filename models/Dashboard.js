/*
    TODO:

    [X] Count of Uncompleted tasks for today
        |||  Использовать SQL BETWEEN по dueDate, и COUNT. 
    [X] Uncomplete task from each lists
        |||  Для подсчета количества задач использовать GROUP BY и COUNT в SQL
        |||  Информацию про список получить в том-же запросе используя RIGHT JOIN
        |||  (ответ также должен содержать списки без задач). 
*/

const db = require('../db');

class Dashboard {

    defaultTable = "default_tasks";
    async getDachboard(){
        
        let uncompletedForToday;
        await db.poolTasks.query("SELECT COUNT(id_task) FROM t_tasks WHERE checked=false AND dueDate BETWEEN '2021-08-05' AND '2021-08-05'")
        .then((res)=>{uncompletedForToday = res.rows[0]});

        let allUncompleted;
        
        await db.poolTasks.query(
            "SELECT public.t_lists.id_list AS id, public.t_lists.name_list AS name, COUNT(public.t_tasks.checked) AS uncompleted " +
            "FROM public.t_lists " +
            "RIGHT JOIN public.t_tasks " + 
            "ON public.t_lists.id_list = public.t_tasks.id_list " + 
            "WHERE public.t_tasks.checked=false " + 
            "GROUP BY public.t_lists.id_list, public.t_lists.name_list " + 
            "ORDER BY public.t_lists.id_list " 
        )
        .then((res)=>{allUncompleted = res.rows});
        

        return [uncompletedForToday, allUncompleted];
    }

}

module.exports = Dashboard; 



async function f1() {
    var x = await new Dashboard().getDachboard()
    console.log(x); // 10
    console.log("DONE"); // 10
  }
f1();

