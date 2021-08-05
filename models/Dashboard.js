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

    async getDashboard(){

        let allUncompleted = await db.knex('public.t_lists').select('public.t_lists.id_list as id', 'public.t_lists.name_list as name')
            .count('public.t_tasks.checked as uncompleted')
            .rightJoin('public.t_tasks', 'public.t_lists.id_list', 'public.t_tasks.id_list')
            .where("public.t_tasks.checked",false).whereBetween('duedate', ['2021-08-05', '2021-08-05'])
            .groupBy("public.t_lists.id_list", "public.t_lists.name_list")
            .orderBy('public.t_lists.id_list');   

        return allUncompleted;
    }

}

module.exports = Dashboard; 



// async function f1() {
//     var x = await new Dashboard().getDachboard()
//     console.log(x); // 10
//     console.log("DONE"); // 10
//   }
// f1();

