const contadorA = require('./instanciaUnica.js')
const contadorB = require('./instanciaUnica.js')

const contadorC = require('./instanciaNova.js')()
const contadorD = require('./instanciaNova.js')()

contadorA.incrementar()
contadorA.incrementar()

console.log(contadorA.valor, contadorB.valor)

contadorC.incrementar()
contadorC.incrementar()

console.log(contadorD.valor, contadorC.valor)