const {Sequelize, DataTypes} = require("sequelize");
const sequalize = require('../utils/db')

const bank = sequalize.define('Bank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    interestRate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxLoan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minDownPayment: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loanTerm: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'banks'
})

module.exports = bank
