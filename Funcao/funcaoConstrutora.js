function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico this transforma o atributo em público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico utilizado para que seja possível acessar o o atributo privado da funcao carro, fora do escopo da função.
    // ou seja, a get velocidade está exportando o conteúdo da velocidadeAtual que só é visível dentro da função carro
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()

console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
