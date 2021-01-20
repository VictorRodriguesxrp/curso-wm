const fabricante = ['Mercedez', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)

fabricante.forEach(function (fabricante) {
    console.log(fabricante)
})

fabricante.forEach(fabricante =>  console.log(fabricante))

