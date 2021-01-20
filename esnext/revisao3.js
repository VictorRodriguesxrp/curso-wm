//ES8: Object.values/ Object.entries

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// melhorias notação literal passando variavel ele cria um atributo do objeto com o nome e valor da variavel, e foi removida
// a necessidade de utilizar a expressã o "Function" para definir uma função no objeto, vide exemplo abaixo

const nome = 'Victor'

const pessoa = {
    nome,
    Ola () {
        return 'Teste do olá da função dentro do objeto'
    }
}

console.log(pessoa.nome, pessoa.Ola())


//classe

class animal {}

class gato extends animal {
    subiuTelhado(metros) {
       return `O gato subiu em um telhado de ${metros} metros`
    }
}

console.log(new gato().subiuTelhado('3'))

