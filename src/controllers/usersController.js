const AppError = require("../utils/appError"); //import
const sqliteConnection = require("../dataBase/sqlite") //import 
const {hash} = require("bcryptjs")

class UsersController{
  async create(request, response){

    const {name, email, password} = request.body;
    const database = await sqliteConnection()
    //linha para checar se o e-mail do usuário já está cadastrado
    const checkUsersExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUsersExist){
      throw new AppError("Este e-mail já está em uso")
    }

    //função hash é uma promisse, portanto tem que usar o await para aguardar ela retornar com a resposta
    const hashedPassword = await hash( password, 8)


    //codigo para inserir informações/registros no banco de dados
    await database.run(
      "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  
}




module.exports = UsersController


/*
Boas práticas para usar uma classe controller. Podemos ter até 5 métodos internos 
* index - GET para listar usuários registros.
* show - GET para exibir um registro específico.
* create - POST para criar um registro.
* update - PUT para atualizar um registro.
* delete - DELETE para remover um registro.
*/

/*Para tratamento dos erros teremos que instalar uma nova biblioteca de erro do express (express async error) = Code npm install express-async-errors --save. Depois de instalada precisamos fazer a importação dela logo na primeira linha do server.js. O server.js é que vai lidar com as excessões*/