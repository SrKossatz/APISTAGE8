const { Router } = require("express"); // import da Router de dentro do express
const usersRoutes = Router() // inicializa o Router

const UsersController = require("../controllers/usersController") //import da classe
const usersController = new UsersController()//instânciar a classe 


//todas as vezes que a rota userRouters for chamada eu quero usar o meu controller
usersRoutes.post("/", usersController.create);

module.exports = usersRoutes; // código para exportar a rota do usersRoutes. Arquivo fica disponível para ser reutilizado no server.js por exemplo.