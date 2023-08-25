const config = require("../../../knexfile");//importa knex
const knex = require("knex"); // cria variável para usar o knex

const connection = knex(config.development) // criada variável de conexão

module.exports = connection; 

