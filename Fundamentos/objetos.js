const prod1 = {Carga: '10h'}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    tamanho: 'M',       
    obj: {
        observacao: 'verão 2020'
    }
}
prod2.desconto = '10%'

console.log(prod2)


'{ "nome": "Camisa Polo", "Preco": 19.0901 }'

const produto3 = {
    nome: 'Produto Teste do Vitão',
    tamanho: 'Camiseta P',
    Preco: 10
}

produto3.desconto = '10%'
produto3['Desconto Legal'] = '12%'

console.log(produto3)