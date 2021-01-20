
//Exercicio 21

function planoDeSaude(idade) {
    let vlFixo = 100
        if (idade < 10) {
            return vlFixo + 80
        }
        else if (idade >= 10 && idade <= 30) {
            return vlFixo + 50
        } else if (idade > 30 && idade <= 60) {
            return vlFixo + 95
        } else if (idade >  60) {
            return vlFixo + 130      
    }
}

//console.log(planoDeSaude(70))


//Exercicio 22

function calculaValor (mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
    } else {
        return 'Mes Invalido'
    }
}

console.log(calculaValor(4, 100))

//exercicio 23

function fncValidaNota(codigo, n1, n2, n3) {
    let mediaPonderada = 0

    while (codigo >= 0) {
        notas = (n1 * 4) + (n2 * 3) + (n3 * 3)
        mediaPonderada = notas / 10
        console.log(`A media do aluno é ${mediaPonderada}, ${codigo} ` )

        if (mediaPonderada >= 5) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado')
        }
        codigo -= 1
    }
}

// fncValidaNota(10, 1,2,7)

function imprime11() {
    let i = 0
    while (i < 11) {
        console.log(`${i}: HelloWorld`)
        i ++
    }
}

//imprime11()


function imprime50 () {
    let i = 0
    while (i <= 50) {
        console.log(`Numero: ${i}`)
        i++
    }
}

//imprime50()

function validaPares () {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(`Este número é par: ${i}`)
        }
    }
}

validaPares()