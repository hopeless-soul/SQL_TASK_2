//SECTION: KNEX
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


//SECTION: SEQUELIZE
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user1:1@localhost:5432/tasks');

const sqTasks = sequelize.define('sqTasks', {
    id_task : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name_task : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dudate : {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    id_list : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    checked : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "false"
    }
}, {
    tableName: 'st_tasks'
});
const sqLists = sequelize.define('sqLists', {
    id_list : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name_list : {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'st_lists'
})
sequelize.sync()

//SECTION: POSTGRES
const {Pool, Client} = require('pg');

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

//EXPORTS:
module.exports.sequelize = sequelize;
module.exports.knex = knex;
module.exports.poolTasks = pool_tasks;
module.exports.poolBirthdays = pool_birthdays;
