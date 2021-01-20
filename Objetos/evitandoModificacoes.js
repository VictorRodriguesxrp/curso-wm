//Object.preventExtensions

const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco : 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag

console.log(produto)

//Object.seal

const pessoa = {nome: 'Juliana', idade: 35}

Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.nome = 'Victor'
pessoa.peso = 60
delete pessoa.idade

console.log(pessoa)