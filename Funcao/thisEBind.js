const pessoa = {
    saudacao : 'Bom dia!',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // bind metodo para atribuiir o dono da execução "this" de 
//um objeto criado, neste caso o this de falarDePessoa, teve seu valor atribuido para o objeto pessoa

falarDePessoa()