const express = require("express"); // importa o express
const app = express(); // inicializar o express
app.use(express.json()); // Padrão utilizado para responder o corpo(body), método POST

const routes = require("./routes") // rotas importadas


app.use(routes);








const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));