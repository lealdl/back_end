const Sequelize = require('sequelize');
const db = require('./db');

const Chamado = db.define('chamados',{
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

//Criar a tabela
//Chamado.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//Chamado.sync({ alter: true });

module.exports = Chamado; 