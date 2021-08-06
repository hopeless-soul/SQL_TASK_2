/*
    TODO:
    [X] Cписок задач назначенных на текущий день.
    ||| Для каждой задачи включена информация про название списка, в котором она находиться.
    ||| Для этого использовать eager loading связи к списку. 
*/

const db = require('../db');
const {DataTypes, Op} = require('sequelize');

class Collection{
    async forToday(){

        // const endDate = new Date();
        // endDate.setDate(endDate.getDate()+1);

        // return await db.sqTasks.findAll({
        //     attributes: ['id_list', 'duedate'],
        //     include: {
        //       model: db.sqLists,
        //       attributes: ['id_list'],
        //       required: true
        //     }
        //     // where : {"duedate" : {[Op.between] : [ '2021-08-05' , '2021-08-08'  ]}}
        // });  
        
        return await db.sqLists.findAll({    });  

            // include: db.sqLists
            // where : {"duedate" : {[Op.between] : [ '2021-08-06' , '2021-08-07'  ]}}
        // });
        // return Tasks.count();
        // return await db.knex('public.t_tasks').select('public.t_tasks.id_task as id', 'public.t_tasks.name_task as name', 'public.t_lists.name_list as list', 'public.t_lists.id_list as listid')
        //     .innerJoin('public.t_lists', 'public.t_tasks.id_list', 'public.t_lists.id_list')
        //     .whereBetween('duedate', ['2021-08-06', '2021-08-06'])
    }
}

module.exports = Collection;




async function f1() {
    var x = await new Collection().forToday()
    console.log(x); 
    console.log("DONE"); 
  }
f1();

