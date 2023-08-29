const { Router } = require("express"); // import da Router de dentro do express
const notesRoutes = Router() // inicializa o Router

const NotesController = require("../controllers/notesController") //import da classe
const notesController = new NotesController()//instânciar a classe 


// function middleware(request, response, next){
//   console.log("voce passou pelo middleware")
//   next()
// }


//todas as vezes que a rota userRouters for chamada eu quero usar o meu controller
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes; // código para exportar a rota do usersRoutes. Arquivo fica disponível para ser reutilizado no server.js por exemplo.