/*
    TODO:

    [X] Count of Uncompleted tasks for today
        |||  Использовать SQL BETWEEN по dueDate, и COUNT. 
    [ ] Uncomplete task from each lists
        |||  Для подсчета количества задач использовать GROUP BY и COUNT в SQL
        |||  Информацию про список получить в том-же запросе используя RIGHT JOIN
        |||  (ответ также должен содержать списки без задач). 
*/

const db = require('../db');

class Dashboard {

    defaultTable = "default_tasks";
    async getDachboard(){
        const { rows } = await db.poolTasks.query('SELECT COUNT(id) FROM ' + this.defaultTable + ' WHERE checked = false  AND dueDate BETWEEN \'2021-08-04\' AND \'2021-08-04\' ');
        return rows[0];
    }

}

module.exports = Dashboard; 



async function f1() {
    var x = await new Dashboard().getDachboard()
    console.log(x); // 10
    console.log("DONE"); // 10
  }
f1();

