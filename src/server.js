require("express-async-errors"); //import da biblioteca espress error
const appError = require("./utils/appError") //import do arquivo appError
const migrationsRun = require("./dataBase/sqlite/migrations")// import do arquivo database sqlite

const express = require("express"); // importa o express
const app = express(); // inicializar o express
app.use(express.json()); // Padrão utilizado para responder o corpo(body), método POST



const routes = require("./routes") // rotas importadas
app.use(routes);

migrationsRun();




//código padrão para tratamento de erro com o express-async-errors
app.use((error, request, response, next) => {
  if(error instanceof appError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    }) // if para definir se o erro é da parte do cliente
  } 
    console.error(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error"
    }) // return para definir se o erro é da parte do servidor
});

const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));