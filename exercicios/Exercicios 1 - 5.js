// 1
function fncExercicio1(p1, p2) {
    console.log(`A soma dos números é ${p1+p2}`)
    console.log(`A subtração dos números é ${p1-p2}`)
    console.log(`A multiplicação dos parâmetros é ${p1*p2}`)
    console.log(`A divisão dos parâmetros é ${p1/p2}`)
}

fncExercicio1(10,5)

//Ex 2

function Triangulo(p1, p2, p3) {
    let tipo = ''

    if(p1 == p2 && p2 == p3) {
        tipo = 'Trata-se de um triângulo Equilátero'
    } else if (p1 == p2 || p1 == p3 || p2 == p3) {
        tipo = 'Trata-se de um triângulo Isóceles'
    } else {
        tipo = 'Trata se de um triângulo Escaleno'
    }

    return console.log(tipo)
}

Triangulo(3,1,2)


//Ex. 3

const baseExpoente = function (base, expoente) {
    return Math.pow(base, expoente)
}

console.log(baseExpoente(2,3))


//Ex. 4 dividendo e divisor

const dividendoDivisor = function (dividendo, divisor) {
    return console.log(`O resultado da divisão é ${Math.floor(dividendo/divisor)}
ne o resto da divisão ${(dividendo%divisor)}`)
}

dividendoDivisor(11,4)


//Ex. 5 

console.log(0.1+0.2)

function round(p1, p2) {
    let total = p1+p2
    // return total.toFixed(2)
    return `R$ ${(p1+p2).toFixed(2).toString().replace(".",",")}`
}

console.log(round(0.1,0.2))

const fromJSON = JSON.parse('{"Tipo": "Tipo de JSon"}')

console.log(fromJSON.Tipo)