function Pessoa () {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade ++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

//new Pessoa


const people = {
    saudacao : 'Bom Dia',
    falar () {
        console.log(this.saudacao)
    }
}

const falarDePessoa = people.falar.bind(people)

falarDePessoa()