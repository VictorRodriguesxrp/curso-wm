Array.prototype.filter2 = function (callBack) {
    let novoArray = []
    for (let i = 0; i <= this.length; i++) {
       novoArray.push(callBack(this[i], i, this))
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil : true },
    {nome: 'iPad Pro', preco: 4199, fragil : true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil : true },
    {nome: 'COpo de Plástico', preco: 18.99, fragil: false}
]

const fncFiltrarArray = function (elemento) {
    return elemento.fragil !== false
} 

console.log(produtos.filter(fncFiltrarArray))