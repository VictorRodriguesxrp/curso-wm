const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Avenida Teste',
        numero: 123,
        complemento: 'Fundos',
        bairro: 'Bairro Teste'
    }
}

const {nome, idade} = pessoa     // tirando de dentro do objeto pessoas o atributo nome e idade

console.log(nome, idade) 

const {nome: n, idade: i} = pessoa

console.log(n,i)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)



const people = {
    name: 'Victor',
    age: 20,
    adress: {
        street: 'Avenida Teste',
        neightbourhood: 'Bairro Teste'
    }
}

const {name, age} = people

console.log(name, age)

const {name: nn, age: aa} = people

console.log(nn,aa)

const {adress: {street, neightbourhood: nb}} = people

console.log(street,nb)