// const porta = 3003

// const { response } = require('express')
// const express = require('express')
// const bancoDeDados = require('./bancoDeDados.js')
// const bodyParser = require('body-parser')
// const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/produtos', (req, res, next) => {
//     res.send(bancoDeDados.getProdutos())
// })

// app.get('/produtos/:id', (req, res, next) => {
//     res.send(bancoDeDados.getProduto(req.params.id))
// })

// app.post('/produtos', (req, res, next) => {
//     const produto = bancoDeDados.salvarProduto({
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto)
// })

// app.put('/produtos/:id', (req, res, next) => {
//     const produto = bancoDeDados.salvarProduto({
//         id: req.params.id,
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto)
// })

// app.delete('/produtos/:id', (req, res, next) => {
//     const produto = bancoDeDados.excluirProduto(req.params.id)
//     res.send(produto)
// })

// app.listen(porta, () => {
//     console.log(`Servidor executando na porta ${porta}.`)
// })

const porta = 3003
const express = require('express')
const bancoDeDados = require('./bancoDeDados.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})


app.put('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }))
})

app.delete('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.deletarProdutos(req.params.idn))
})

// }

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})