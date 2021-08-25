const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
//urlencoded é uma função que retorna um middleware
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.urlencoded({ extended: true}))
//get é uma forma de requisição
//passa como resposta para essa requisição uma função middleware
// faço um get quando quero pegar um produto
// esse primeiro get vai pegar TODOS os produtos
app.get('/produtos',(req, res, next) =>{
    res.send(bancoDeDados.getProdutos())// vai ser convertido para json automaticamente
})
// get = obter alguma informação do servidor
// /:id = é um parametro passado 
// esse segundo get vai pegar o produto pelo ID
app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id)) //req.params ==> local onde eu coloquei os parametros na url
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// tambem vai gerar um json
})
//para substituir um produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//para exlcuir um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})


// passa a porta e uma callback so pra ver que ele conseguiu startar a aplicação
app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})

