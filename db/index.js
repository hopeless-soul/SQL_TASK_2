const {Pool, Client} = require('pg');

const pool_birthdays = new Pool({
    user: 'user1',
    host: 'localhost',
    database: 'birthdays',
    password: '1',
    port: 5432
});

const pool_tasks = new Pool({
    user: 'user1',
    host: 'localhost',
    database: 'tasks',
    password: '1',
    port: 5432
});


module.exports.poolBirthdays = pool_birthdays;
module.exports.poolTasks = pool_tasks;
