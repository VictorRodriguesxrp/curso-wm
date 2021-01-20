// const produtos = [
//     {nome: 'Notebook', preco: 2499, fragil : true },
//     {nome: 'iPad Pro', preco: 4199, fragil : true },
//     {nome: 'Copo de Vidro', preco: 12.49, fragil : true },
//     {nome: 'COpo de Plástico', preco: 18.99, fragil: false}
// ]

// console.log(produtos.filter(function (p) {
//     return p.preco > 20
// }))

// fncFragil = (elemento) => (elemento).fragil == false

// console.log(produtos.filter(fncFragil))

// fncFragilECaro = (elemento) => (elemento).fragil == true && elemento.preco > 500

// console.log(produtos.filter(fncFragilECaro))


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil : true },
    {nome: 'iPad Pro', preco: 4199, fragil : true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil : true },
    {nome: 'COpo de Plástico', preco: 18.99, fragil: false}
]


const fncFiltrarArray = function (elemento) {
    return elemento.fragil == false
} 

console.log(produtos.filter(fncFiltrarArray))