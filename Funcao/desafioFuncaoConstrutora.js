class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')


function People(nome) {
   this.falar = function() {
       console.log(`Meu nome é ${nome}`)
   }
}

const people1 = new People('Joao')

people1.falar()