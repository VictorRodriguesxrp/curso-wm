console.log('01)', '1' == 1)  // testa apenas valores

console.log('02)', '1' === 1) // testa valores e tipo de dados

console.log('03)', '3' != 3) // testa se os valores são diferentes (apenas valores , Ex: 3 e 3)

console.log('04)', '3' !== 3) // testa se os valores e os tipos são diferentes, exemplo (3 Inteiro ) <> (3 String)


const d1 = new Date(0)

const d2 = new Date(0)

console.log('09) ', d1 === d2)
console.log('10) ', d1 == d2)

console.log('11) ', d1.getTime()     === d2.getTime())

console.log('12) ', undefined == null)

console.log('13) ', undefined === null)