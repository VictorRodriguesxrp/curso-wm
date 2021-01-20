function fncTeste(pA, pB) {
    return function(pC) {
        console.log(pA + pB + pC)
    } 
}

const Teste = fncTeste(10,5)

Teste(30)
