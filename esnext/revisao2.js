//arrow function

const soma = (a, b) => a + b

console.log(soma(10,5))

// arrow function (this)

const lexico1 = () => console.log(this === exports)

lexico1()

const lexico2 = lexico1.bind({})

lexico2()

//parametro default

function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Victor')


//operador rest

function total (...numeros) {
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}

// para cada numero do array ele o total recebe ele mesmo mais o valor correspondente ao número do indice percorrido

console.log(total(1,2,3,10))





function somarTudo (...Numeros) {
    let total = 0
    Numeros.forEach(n => {
        total +=n
    })
    return total
}

console.log(somarTudo(1,2,5))


const somarArrow = (...numeros) => {
    let total = 0
    numeros.forEach((n) => total +=n)
    return total
}

console.log(somarArrow(1,2,3,4))