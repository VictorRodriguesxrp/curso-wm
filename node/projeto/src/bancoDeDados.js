// const sequence = {
//     _id: 1,
//     get id() { return this._id++ }
// }

// const produtos = {

// }

// function salvarProduto (produto) {
//     if (!produto.id) produto.id = sequence.id
//     produtos[produto.id] = produto
//     return produto
// }

// function getProduto(id) {
//     return produtos[id] || {}
// }

// function getProdutos() {
//     return Object.values(produtos)
// }

// function excluirProduto(id) {
//     const produto = produtos[id]
//     delete produtos[id]
//     return produto 
// }

// module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}


const produtos = {

}

const sequence = {
    _id: 1,
    get id() {return this._id++}
}


function salvarProdutos(produto) {
    if (!produto.id) produto.id = sequence.id
        produtos[produto.id] = produto
        return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}


function deletarProdutos(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProdutos, getProduto, getProdutos, deletarProdutos}