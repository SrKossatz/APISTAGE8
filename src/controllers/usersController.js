/*
Boas práticas para usar uma classe controller. Podemos ter até 5 métodos internos 
* index - GET para listar usuários registros.
* show - GET para exibir um registro específico.
* create - POST para criar um registro.
* update - PUT para atualizar um registro.
* delete - DELETE para remover um registro.
*/
class UsersController{
  create(request, response){

    const {name, email, password} = request.body;

    response.json({name, email, password})
  }
}



module.exports = UsersController