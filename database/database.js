// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });
// module.exports = db;
require('dotenv').config()
const Sequelize = require('sequelize');

const db = {}

const sequelize = new Sequelize.Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then(() => console.log('DATABASE CONNECTED')).catch(err => console.log('ERROR: ' + err))

db.Sequelize = Sequelize
db.sequelize = sequelize
db.User = require('./models/user.model')(sequelize, Sequelize.DataTypes)
db.Transaction = require('./models/transactions.model')(sequelize, Sequelize.DataTypes)

module.exports = db