function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

// passando parâmetro variaveis, a propriedade arguments guarda todos os parametros passado para a função, portanto este tipo de
//funcao soma todos os parametros que foram passados para a funcao de forma dinamica, através da posição de cada um arguments[i]

console.log(soma())

console.log(soma(1,2,3,4,5,6,6,100))

