const Sequelize = require('sequelize');
const db = require('./db');

const MsgContact = db.define('msgs_contacts', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    equipamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    defeito: {
        type: Sequelize.STRING,
        
    },
    status: {
        type: Sequelize.STRING,
        
    }

});

//Criar a tabela no BD
//MsgContact.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//MsgContact.sync({ alter: true });

module.exports = MsgContact;