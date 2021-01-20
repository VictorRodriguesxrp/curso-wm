function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`.replace('.',',')
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.90
const parcelado = 11 

console.log(real `1x de ${preco} ou 3x de ${parcelado}`)