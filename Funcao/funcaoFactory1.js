// Factory

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


const criarProduto = function (pNome, pValor, pDesconto = 10) {
    return {
        nome: pNome,
        valor: pValor,
        desconto: pValor - pDesconto
    }
}

console.log(criarProduto('Camiseta', 1000))
console.log(criarProduto('Teste', 50))