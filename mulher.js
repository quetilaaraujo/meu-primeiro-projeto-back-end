const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Quétila Góes',
        imagem: 'https://avatars.githubusercontent.com/u/98995303?s=400&u=1e2ff26bf8513ee9dbde8bbe4b689beebe7b6a0a&v=4',
        minibio: 'Desenvolvedor Backend',
    })
}

function mostraPorta() {
    console.log(" Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)