const { Sequelize } = require("sequelize");

const DB_NAME = 'mg-calc'
const USER_NAME = 'root'
const PASSWORD = 'root'

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports = db

