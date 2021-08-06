const db = require('./index');

let names = ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing elit", "Sed laoreet felis arcu", "Id maximus", "Elit", "Ornare e", "Fusce vulputate", "Ut lectus", "In convallis", "Fusce semper", "Vestibulum magna", "A dapibus", "Morbi nisi", "Turpis", "Laoreet nec sapien sit", "Amet", "Aliquam"];
function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

async function regenerateLists(count){
    await db.sqLists.destroy({truncate: true});
    for (let i = 0; i < count; i++) {
        await db.sqLists.create({id_list: i+1, name_list: names[getRandomIntInclusive(0,names.length-1)]})
    }
    return;
} 
async function regenerateTasks(tasksCount, listsCount){
    await db.sqTasks.destroy({truncate: true});
    for(let i=0; i<listsCount; i++){
        for(let j=0; j<tasksCount; j++){
            let now = new Date();
            now.setDate(getRandomIntInclusive(now.getDate()-2,now.getDate()+2));
            await db.sqTasks.create({
                id_task: j+1, 
                name_task: names[getRandomIntInclusive(0,names.length-1)],
                duedate: now,
                id_list: i+1,
                checked: getRandomIntInclusive(0,1)==0 ? true : false
            });
        }
    }
    return;
}

async function regenerate(tasksCount, listsCount){
    regenerateTasks(tasksCount,listsCount)
    regenerateLists(listsCount);
    db.sequelize.sync();
}


//SECTION: CALLS
regenerate(15,3)