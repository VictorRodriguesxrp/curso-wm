//Armazenando funcao em uma variavel 

const vImprimirSoma = function (pA, pB){
    console.log(pA+pB)
}

vImprimirSoma(2,3)

//Armazenando uma funcao Arrow em uma Variavel

const vSoma = (pA,pB) => {
    return pA+pB
}

console.log(vSoma(5,10))

// retorno implícito

const subtracao = (a,b) => a-b

console.log(subtracao(10,50))

const imprime2 = a => console.log(a)

imprime2('Testemos a funcao de uma linha')


//Armazenando funcao em uma variavel

const vImprimirSoma2 = function(pA,pB = 10) {
    console.log(pA+pB)
}

vImprimirSoma2(1,1)
vImprimirSoma2(1)


//Armazenando uma funcao Arrow em uma Variavel

const vSomaArrow = (pa,pB = 10) => {
   return pa+pB
}

console.log(vSomaArrow(10))
// retorno implícito

const vArrowMinusculo = (a, b) => console.log(a+b)

vArrowMinusculo('Vamos ver se vc é tudo isso ', 'teste')