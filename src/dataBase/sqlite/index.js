const sqlite3 = require("sqlite3");//versão usada
const sqlite = require("sqlite");// drive para se conectar com o Banco de Dados
const path = require("path"); // biblioteca nativa do node que resolve os endereços de acordo com o ambiente

//função criada para ter conexão com o banco de dados. Essa função cria o arquivo do banco de dados de forma automática

async function sqliteConnection(){ 
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database

  });

  return database;
  
}

module.exports=sqliteConnection;