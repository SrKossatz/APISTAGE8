const AppError = require("../utils/appError");

class UsersController{
  create(request, response){

    const {name, email, password} = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório");
    }

    response.status(201).json({name, email, password})
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