function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max-min) - min
    return Math.floor(valor)
}

let pInicial = 0

while (pInicial != -1) {
    pInicial = getInteiroAleatorio(-1, 10)
    console.log(pInicial)
}