const db = require('../db');

class Tasks {
    defaultTable = "default_tasks";
    async getTestEntries(){
        const { rows } = await db.poolTasks.query('SELECT * FROM ' + this.defaultTable);
        return rows;
    }
    async getTables(){
        const { rows } = await db.poolTasks.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
        return rows;
    }
    async getEntriesByName( tableName ){
        const { rows } = await db.poolTasks.query('SELECT * FROM ' + tableName);
        return rows;
    }
    async addEntry( tableName, id, name, desc, isChecked ){
        const { rows } = await db.poolTasks.query('INSERT INTO ' + tableName + ' VALUES( $1, $2, $3, $4 )', [id,name,desc,isChecked]);
        return rows;
    }
    async removeEntry( tableName, id ){
        const { rows } = await db.poolTasks.query('DELETE FROM ' + tableName + ' WHERE id = $1', [id]);
        return rows;   
    }
    async updateEntry( tableName, id, newId=undefined, name=undefined, desc=undefined, isChecked=undefined ){
        let str = 'UPDATE ' + tableName + ' SET ' +  
            `${newId != undefined ? `id = ${newId} ` : ''} ` + 
            `${name != undefined ? ` , name = '${name}', ` : ''} ` + 
            `${desc != undefined ? ` , description = '${desc}', ` : ''} ` + 
            `${isChecked != undefined ? `checked = ${isChecked} ` : ''} ` + 
            ' WHERE id = $1'; 
        const { rows } = await db.poolTasks.query(str, [id]);
        return rows;
    }
    
}

module.exports = Tasks; 



// async function f1() {
//     var x = await new Tasks().getFromAll()
//     console.log(x); // 10
//     console.log("DONE"); // 10
//   }
// f1();


