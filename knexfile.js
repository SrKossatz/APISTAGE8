// knex.js é um query builder usado para transcrever a linguagem de programação para qualquer tipo de banco de dados relacional.

const path = require("path")//caminho criado para que seja lido por qualquer sistema operacional

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },

    Pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },

    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migration")
    },
    useNullAsDefault: true //propriedade padrão para utilização do knex.js
  },
};
