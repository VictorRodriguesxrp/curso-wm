//pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'

Object.freeze(pessoa) // congela o objeto, impedindo de adicionar atributos, alterar atributos ou deletar atributos

pessoa.nome = 'Maria'

console.log(pessoa)

//criando um objeto congelado, como se fosse uma const de verdade

const pessoaConstante = Object.freeze({nome: 'Joao'})

pessoaConstante.nome = 'Victor'

console.log(pessoaConstante)
