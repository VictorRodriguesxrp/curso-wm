// coleção dinamica de pares chave e valor

const produto = new Object 
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do Produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario : {
        nome: 'Raul',
        idade : 56,
        endereço : {
           logradouro : 'Rua abc',
           numero: 123
        }
    },
    condutores: [ {
       nome: 'Junior',
       idade: 9
    }, {
        nome: 'Ana',
        idade: 42
    }
    ]
}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.endereco


console.log(carro.condutores)