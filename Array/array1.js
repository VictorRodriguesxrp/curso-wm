console.log(typeof Array, typeof new Array, typeof [])

let aprovado = new Array ('Bia', 'Carlos', 'Ana')

for (let i in aprovado) {
    console.log(aprovado[i])
}

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[2])

aprovados[3] = 'Victor'

console.log(aprovados[3])

aprovados.push('Pedro')

console.log(aprovados[4])

console.log(aprovados.length)

aprovados[9] = 'Rafael'

// console.log(aprovados)

console.log(aprovados[8] === undefined)

//aprovados.sort()

// console.log(aprovados)

delete aprovados[1]

console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 2, 'Elemento1', 'Elemento2')

console.log(aprovados)


