const moduloA = require('../../moduloA.js')

// ou const moduloA = require('C:\users\victo\onedrive\documentos\exercicios-js\node\moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao')

console.log(saudacao.ola)

const http = require('http')


// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)

const pastaC = require('./pastaC')

console.log(pastaC.ola2)