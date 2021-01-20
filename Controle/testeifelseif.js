Number.prototype.between = function (inicio, fim) {
   return this >= inicio && this <= fim
}

const imprimeErro = function(erro) {
    throw "ATENÇÃO! O VALOR INFORMADO NÃO É NUMERO"
}

const imprimirResultado = function(numero) {
   try {
        if (numero.between(9,10)) {
            console.log('Aprovado topzeira!!!')
        } else if (numero.between(7,8)) {
            console.log('Ta ruim mas ta bom')
        } else if (numero.between(0,5)) {
            console.log('vacilou pai')
        } else {
            console.log('Valor Invalido')
        }
   } catch (e) {
       imprimeErro(e)
    }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('teste')

