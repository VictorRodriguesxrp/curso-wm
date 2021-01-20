const resultado = nota => nota >= 7 ? 'Aprovada' : 'Reprovado'

console.log(resultado(6))

function fncResultado(pNota) {
    if (pNota >7) {
       console.log('Aprovado')
    } else {
       console.log('Reprovado')
    }
}

fncResultado(8)

const notaArrow = (pResultado) => pResultado >7 ? 'Aprovado' : 'Reprovado'

console.log(notaArrow(6))


let a = 3

console.log(this.a)

console.log(global.a)

this.c = 456

console.log(this.c)

console.log(module.exports.c)

console.log(module.exports.c === this)

