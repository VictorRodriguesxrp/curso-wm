const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework : true})

console.log(tecnologias.react)
console.log(tecnologias.get('React'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(valor, chave)
})

console.log(chavesVariadas.has(123))

chavesVariadas.delete(123)

console.log(chavesVariadas.has(123))

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')

console.log(chavesVariadas)