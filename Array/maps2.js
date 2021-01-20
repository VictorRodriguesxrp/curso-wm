const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//retornar um array apenas com os precos.

//console.log(JSON.parse('{ "nome": "Borracha", "preco": 3.45 }'))

const parseExtraiPreco = (elemento) => JSON.parse(elemento).preco

console.log(carrinho.map(parseExtraiPreco))
