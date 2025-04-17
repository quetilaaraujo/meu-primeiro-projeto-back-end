const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Quétila Góes',
        imagem: '',
        minibio: 'Aluna Programaria',
    },
    {
        nome: 'Simara Conceição',
        imagem: '',
        minibio: 'Intrutora Backend',
    },
    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fundadora Programaria',
    }
]
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log(" Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)