const peso1 = 1
const peso2 = Number('2')
const peso3 = '25'
const peso4 = Boolean(false)

/*const formatado = peso1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})*/

console.log(peso1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
            peso2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
            peso3,
            peso4
           )

console.log(peso1.toPrecision(5))
console.log(Number.isInteger(peso1))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1+peso2)

console.log(total.toFixed(2))
console.log(total.toString())
console.log(typeof total)