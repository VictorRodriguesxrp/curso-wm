function validaDiaUtil (dia) {
    switch(dia) {
        case "1" :
            console.log('Domingo (Não Util)')
            break;
        case '2' :
            console.log('Segunda (Dia Util)')
            break;
        case '3' :
            console.log('Terça (Dia Util)')
            break;
        case '4' :
            console.log('Quarta (Dia Util)')
            break;
        case '5' :
            console.log('Quinta feira (dia Util)')
            break;
        case '6' : 
            console.log('Sextou (Dia Util')
            break;
        case '7' :
            console.log('Sabado (Não Util')
            break;
        default :
           console.log('Dia Inválido')
    }
}

// validaDiaUtil('1')
// validaDiaUtil('2')
// validaDiaUtil('3')
// validaDiaUtil('4')
// validaDiaUtil('5')
// validaDiaUtil('6')
// validaDiaUtil('7')
// validaDiaUtil('dadad')


// 14 

const validaFruta = function (fruta) {
    switch(fruta) {
        case 'maça' :
            console.log('Não vendemos esta fruta aqui')
            break;
        case 'kiwi' :
            console.log('Estamos com escassez de kiwis')
            break;
        case 'melancia' :
            console.log('Aqui está, são 3 reais o quilo')
            break;
        default :
            console.log('Fruta inválida!')
    }
}

// validaFruta('maça')
// validaFruta('kiwi')
// validaFruta('melancia')
// validaFruta('laranja')


//exercicio 15



function validaModeloCarro(modelo) {
    switch (modelo) {
        case 'hatch' : 
           console.log('Compra efetuada com sucesso!')
           break;
        case 'sedan' :
        case 'motocicleta' :
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break;
       default :
            console.log('Não trabalhamos com este modelo aqui!')
    }
}

// validaModeloCarro('hatch')
// validaModeloCarro('sedan')
// validaModeloCarro('motocicleta')
// validaModeloCarro('caminhonete')
// validaModeloCarro('conversível')

//exercicio 16

function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case '+' :
            return n1 + n2
            break;
        case '-' :
            return n1-n2
            break;
        case '*' : 
            return n1*n2
            break;
        case '/' :
            return n1/n2
            break;
        default :
            return 'Operacao inválida'
    }
}

// console.log(calculadora(1,1, '+'))
// console.log(calculadora(2000,1, '-'))
// console.log(calculadora(100,20, '/'))
// console.log(calculadora(120,2, '*'))
// console.log(calculadora(1,1, 'a'))

//exercicio 17

function calculaSalario(pPlanoTrabalho, pSalarioAtual) {
    switch (pPlanoTrabalho) {
         case 'A' :
             return `Com o novo aumento o salário será ${(pSalarioAtual + (pSalarioAtual * 0.10))}`
             break;
        case 'B' :
             return `Com o novo aumento o salário será ${(pSalarioAtual + (pSalarioAtual * 0.15))}`
             break;
        case 'C' :
             return `Com o novo aumento o salário será ${(pSalarioAtual + (pSalarioAtual * 0.20))}`
             break;
        default :
            return `Nenhum plano de trabalho válido foi informado!`
    }
}

// console.log(calculaSalario('A', 1000))
// console.log(calculaSalario('B', 1000))
// console.log(calculaSalario('C', 1000))
// console.log(calculaSalario('D', 1000))

//exercicio 18

function lerNumero(numero) {
    switch(numero) {
        case 1 :
            return 'Um'
            break;
        case 2 :
            return 'Dois'
            break;
        case 3 :
            return 'Tres'
            break;
        case 4 :
            return 'Quatro' 
            break;
        case 5 :
            return 'Cinco'
            break;
        case 6 :
            return 'Seis'
            break;
        case 7 :
            return 'Sete'
            break;
        case 8 : 
            return 'Oito'
            break;
        case 9 :
            return 'Nove'
            break;
        case 10 :
            return 'Dez'
            break;
        default :
           return 'NumeroInvallido'
    }
}

// console.log(lerNumero(1))
// console.log(lerNumero(10))
// console.log(lerNumero(11))


// exercicio 20

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function sacarDinheiro (valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch(valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break;
            case 50:
                valorSaque -= 50
                contador50 ++
                break;
            case 10:
                valorSaque -= 10
                contador10++
                break;
            case 5:
                valorSaque -= 5
                contador5++
                break;
            case 1:
                valorSaque -= 1
                contador1++
                break;
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if(contador100 > 0) {
        resultado += `Serão necessárias ${contador100} notas de R$ 100.`
    }

    if(contador50 > 0) {
        resultado += `Serão necessárias ${contador50} notas de R$ 50.`
    }

    if(contador10 > 0) {
        resultado += `Serão necessárias ${contador10} notas de R$ 10.`
    }

    if(contador5 > 0) {
        resultado += `Serão necessárias ${contador5} notas de R$ 5.`
    }

    if(contador1 > 0) {
        resultado += `Serão necessárias ${contador1} notas de R$ 1.`
    }

    return resultado
}

console.log(sacarDinheiro(153))