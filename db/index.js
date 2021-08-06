const {Pool, Client} = require('pg');

const knex = require('knex')({
    client: 'pg',
    connection: {
        database : 'tasks',
        host : '127.0.0.1',
        port: 5432,
        user : 'user1',
        password : '1'
    }
});



const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://user1:1@localhost:5432/tasks');

( async ()=>{ //INFO: TEST CONNECTION
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }   
})();

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
module.exports.knex = knex;
module.exports.sequelize = sequelize;
