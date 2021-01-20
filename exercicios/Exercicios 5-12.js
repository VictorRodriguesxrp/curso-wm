//Exercicio 6

function calculaJurosSimples(pCapitalInicial, pMeses, pJuros) {
    let juros = 0
    for (let i = 0; i <= pMeses; i++) {
        juros = ((pCapitalInicial*pJuros) / 100)
        pCapitalInicial = pCapitalInicial + (pCapitalInicial * (pJuros/100))
   }
   return `Valor da divida após acréscimo de ${pMeses} meses de juros: ${pCapitalInicial} // ${pJuros/100}`
}

console.log(calculaJurosSimples(1000, 1, 10))

console.log((1000*2)/100)


function fncJurosSimples(pValor, pTaxa, pTempo) {
    return pValor + (pValor * pTaxa * pTempo)
}

console.log(fncJurosSimples(100, 10/100, 2))

function fncJurosCompostos(pValor, pTaxa, pTempo) {
    return Math.floor(pValor * (1 + pTaxa) ** pTempo)
}

console.log(fncJurosCompostos(100, 10/100, 2))

//Exercicio 7

const resolveBhaskara = function (ax2, bx, c) {
        let delta = (bx ** 2) - (4 * ax2 * c)
        let result = []
        if(delta < 0) {
            console.log('O valor de delta é negativo')
        }
        x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        x2 = (+bx + Math.sqrt(delta)) / (2*ax2)
        result.push(x1)
        result.push(x2)
    return console.log(result)
}

resolveBhaskara(3, 1, 2)
resolveBhaskara(1, 3, 2)


// Exercicio 8
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function calculaMaiorPontuacao(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let ptQtdeQuebraPontuacoes = 0
    let ptPiorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            ptQtdeQuebraPontuacoes ++
        } else if (pontuacoes [i] < maiorPontuacao) {
            menorPontuacao = pontuacoes[i]
            ptPiorJogo = i + 1
        }
    }
    return [ptQtdeQuebraPontuacoes, ptPiorJogo]
}

console.log(calculaMaiorPontuacao(stringPontuacoes))

// Exercicio 9


function validaNotaAlunos(nota) {
    if (Arredondar(nota) >= 40) {
        console.log('Aluno aprovado brother')
    } else {
        console.log('Aluno reprovado')
    }
}

function Arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

validaNotaAlunos(30)

validaNotaAlunos(38)


validaNotaAlunos(100)

//Exercicio 10

function divisivelPor3(numero) {
    let resto = numero % 3 
    if(resto == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(divisivelPor3(6))


function calculaBissexto(ano) {
    if (ano % 4 ==0 && ((ano % 100 !=0) || (ano % 400 == 0))) {
        return true
    } else
       return false
}

if (calculaBissexto(2021) == true) {
    console.log('Ano Bissexto')
} else {
    console.log('Não é bissexto')
}

console.log(calculaBissexto(0))
console.log(calculaBissexto(4))
console.log(calculaBissexto(100))
console.log(calculaBissexto(400))
console.log(calculaBissexto(800))
console.log(calculaBissexto(2020))
console.log(calculaBissexto(2021))


// Exercicio 12

function calculaFatorial(numero) {
   if (numero == 0) {
       return 1
   } else {
       return numero * calculaFatorial(numero -1)
   }
}

// function fatorial (numero) {
//     if(numero == 0){
//         return 1
//     } else {
//         return numero * fatorial(numero - 1)
//     }
// }


console.log(calculaFatorial(2))