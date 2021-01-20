const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove ultimo elemento da lista

console.log(pilotos)

pilotos.push('Verstappen')

console.log(pilotos)

pilotos.shift() // remove primeiro elemento da lista

console.log(pilotos)

pilotos.unshift('Hamilton')

console.log(pilotos)


//splice pode adicionar e remover

pilotos.splice(2,0,'Bottas', 'Massa')

console.log(pilotos)

pilotos.splice(3,1)

console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // cria um novo array a partir do indice informado, neste caso 2

console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)

console.log(algunsPilotos2)

