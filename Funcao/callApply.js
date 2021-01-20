function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// const Produto = function (nome, preco, desc = 0.15, getPreco) {
//    return {
//        nome,
//        preco,
//        desc,
//        getPreco
//    }
// }

const Produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc  = 0.1
console.log(getPreco())

console.log(Produto.getPreco())


const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

// diferença entre as duas é a passagem de parametros vide exemplo abaixo;

console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro, [0.17, '$']))