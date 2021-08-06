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
function genTasksInsertRow(tasks, lists){
    let taskNames = ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing elit", "Sed laoreet felis arcu", "Id maximus", "Elit", "Ornare e", "Fusce vulputate", "Ut lectus", "In convallis", "Fusce semper", "Vestibulum magna", "A dapibus", "Morbi nisi", "Turpis", "Laoreet nec sapien sit", "Amet", "Aliquam"];
    function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

    let queryHead = `INSERT INTO t_tasks VALUES `; 
    let argumentIndex = 1;
    let args = [];
    for(let i=0; i<lists; i++){
        for(let j=0; j<tasks; j++){
            queryHead += "(";
            queryHead += `$${argumentIndex},`; argumentIndex++ // ID_TASK
            queryHead += `$${argumentIndex},`; argumentIndex++ // NAME_TASK
            queryHead += `$${argumentIndex},`; argumentIndex++ // DUE_DATE
            queryHead += `$${argumentIndex},`; argumentIndex++ // ID_LIST
            queryHead += `$${argumentIndex}` ; argumentIndex++ // CHECKED
            queryHead += "),";
            // if(i!=lists && j!=tasks-1){queryHead += ","}
            args.push(j+1); // ID_TASK
            args.push(taskNames[getRandomIntInclusive(0,taskNames.length-1)]); // NAME_TASK
            let now = new Date();
            now.setDate(getRandomIntInclusive(now.getDate()-2,now.getDate()+2));
            args.push(now); // DUE_DATE
            args.push(i+1); // ID_LIST
            args.push(getRandomIntInclusive(0,1)==0 ? true : false); // CHECKED
        }   
    }
    queryHead = queryHead.slice(0, -1); 
    
    // console.log(queryHead);
    return [queryHead, args];
}


client
    .query("DELETE FROM t_tasks").then(res => logResult(res) )

    
    
let [queryRow, queryValues] = genTasksInsertRow(5,4);
console.log([queryRow, queryValues]);
client
    .query({
        name: 'Insert tasks.',
        text: queryRow,
        values: queryValues 
    }).then(res => logResult(res) )


client
    .query('SELECT * FROM t_tasks')
    .then(res => logResult(res) )
    .then( ()=>client.end() )
