const nums1 = [1, 2, 3, 4, 5, 6]

// Map é um for com um propósito

//  let resultado = nums1.map(((e) => e * 2))

let resultado = nums1.map(function(pElemento) {
    return pElemento * 2
})

 console.log(resultado, nums1)

const soma10 = (e) => e + 10
const triplo = (e) => e * 3
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums1.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)





testeMaps = [10, 20, 30, 40, 50]

const vezes10 = (parametro) => parametro * 10
const vezes20 = function (parametro) {
    return parametro * 20
}

const paraMoney = (parametro) => parseFloat(parametro).toFixed(2).replace('.', ',')
resultado = testeMaps.map(vezes10).map(vezes20).map(paraMoney)

console.log(resultado)