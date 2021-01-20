function Carro (velocidadeMaxima = 200 , delta = 20 ) {
    let velocidadeAtual = 0
    
    this.acelerar = function() {       
        if (velocidadeAtual + delta < velocidadeMaxima) {
            velocidadeAtual =+ delta
        } else {
            vecelocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual= function() {
       console.log(`A velocidade atual é: ${velocidadeAtual}`)
    }

}

const cabacelta = new Carro

cabacelta.acelerar()

console.log(cabacelta.getVelocidadeAtual())
