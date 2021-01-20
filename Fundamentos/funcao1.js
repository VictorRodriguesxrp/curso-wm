//funcao sem retorno

function fncImprimirSoma(pA, pB) {
    console.log(pA+pB)
}

fncImprimirSoma(50,30)

fncImprimirSoma(3)

fncImprimirSoma('Teste ', 'Concatenando String')

function fncSoma(pA, pB = 0) {
    return pA+pB
}

console.log(fncSoma(10+50))

