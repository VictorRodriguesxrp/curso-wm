const nome = 'Victor'
const concatenacao = 'Olá ' + nome + "!"

console.log(concatenacao)

const template = `
Olá
${nome}!`

console.log(concatenacao, template)

//expressoes

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(up('cuidado'))

console.log(`Ei... ${up('transformando todo o texto em upper case!')}`)