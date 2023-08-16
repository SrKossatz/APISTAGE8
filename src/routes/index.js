const { Router } = require("express")

const usersRouter = require("./users.routes"); //importa a rota para o index



const router = Router()
router.use("/users", usersRouter ) // Agora todas as vezes que o users for acessado ele traz o grupo de rotas do usuário que está representado pelo usersRouter

module.exports=router;