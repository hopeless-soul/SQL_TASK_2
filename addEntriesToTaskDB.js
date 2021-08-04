const { Client } = require('pg')
const client = new Client({
    database: "tasks", 
    user : "user1",
    password: "1"
})

client.connect()

function logResult(res){
    console.log("res.rowCount >>>", res.rowCount);
    console.log("res.fields >>>", res.fields);
    console.log("res.rows >>>", res.rows);
    console.log("res.command >>>", res.command);
    console.log("=================================");
}
function genTasksInsertRow(count, tableName){
    let taskNames = ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing elit", "Sed laoreet felis arcu", "Id maximus", "Elit", "Ornare e"];
    let taskDescs = ["Fusce vulputate", "Ut lectus", "In convallis", "Fusce semper", "Vestibulum magna", "A dapibus", "Morbi nisi", "Turpis", "Laoreet nec sapien sit", "Amet", "Aliquam"];
    let queryHead = `INSERT INTO ${tableName} VALUES `; 
    let ids = [], names = [], descs = [], checked = [], dueDates = [];
    function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    for(let i=0; i<count; i++){
        
        queryHead += "(";
        queryHead += `$${i+1},`; // ID
        queryHead += `$${i+1+count},`; // NAME
        queryHead += `$${i+1+count+count},`; // DESC
        queryHead += `$${i+1+count+count+count},`; // CHECKED
        queryHead += `$${i+1+count+count+count+count} `; // DUEDATE
        
        queryHead += ")";
        if(i!=count-1){queryHead += ","}

        ids.push(i+1);
        names.push(taskNames[Math.floor(Math.random() * taskNames.length)]);
        descs.push(taskDescs[Math.floor(Math.random() * taskDescs.length)]);
        checked.push(false);

        now = new Date();
        now.setDate(getRandomIntInclusive(now.getDate()-2,now.getDate()+2));
        dueDates.push(now);

    }
    console.log(queryHead);
    return [queryHead, ids.concat(names, descs, checked, dueDates)];
}

let tableName = "taskslist1";

client
    .query("DELETE FROM " + tableName).then(res => logResult(res) )

    
    
let [queryRow, queryValues] = genTasksInsertRow(13, tableName);
client
    .query({
        name: 'Insert tasks.',
        text: queryRow,
        values: queryValues 
    }).then(res => logResult(res) )


client
    .query('SELECT * FROM ' + tableName)
    .then(res => logResult(res) )
    .then( ()=>client.end() )
