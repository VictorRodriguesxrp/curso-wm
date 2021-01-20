const fs = require('fs')
const path = require('path')

//const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo (_, conteudo) {
     return conteudo.toString()
}

// fs.readFile(caminho,exibirConteudo)

// function gerarNumerosEntre(min, max) {
//     if (min > max) {
//         [max, min] = [min, max]
//     }

//     return new Promise (resolve => {
//         const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
//         resolve(aleatorio)
//     })
// }

function lerArquivo (arquivo) {
    let caminho = path.join(__dirname, arquivo)

    return new Promise (resolve => {
        let conteudo = fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        }) 
    })
}

lerArquivo('dados.txt')
.then(n => n.toUpperCase())
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `O valor final é ${conteudo}`)
.then(console.log)
