let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)

const up = texto => texto.toUpperCase()

console.log(up('os verdadeiros...'))

console.log(!!3)


console.log(up('os falsos'))
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)

console.log(!('' || null || 0 || 'Eai monstro!'))

let nome = ''

console.log(nome || 'Não preenchido!')