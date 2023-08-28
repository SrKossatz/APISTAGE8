const { Router } = require("express")

const usersRouter = require("./users.routes"); //importa a rota para o index
const notesRouter = require("./notes.routes"); //importa a rota para o index



const routers = Router()
routers.use("/users", usersRouter ); // Agora todas as vezes que o users for acessado ele traz o grupo de rotas do usuário que está representado pelo usersRouter
routers.use("/notes", notesRouter ); // Agora todas as vezes que o notes for acessado ele traz o grupo de rotas do usuário que está representado pelo usersRouter

module.exports = routers;