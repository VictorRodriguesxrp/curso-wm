const nomes = ['Victor', 'Marcio', 'Teste']

nomes.push('nomeQuatro')

console.log(nomes)

nomes.sort()

console.log(nomes)

nomes[1] = 'Marcio2'

nomes.splice(2,2)

console.log(nomes)

nomes.pop()

console.log(nomes)

nomes.push('Victor', 'Carlos', 'Ronaldo', 'Romario')

console.log(nomes)

nomes.unshift('Marcio')

console.log(nomes)

nomes.splice(1,0,'TesteSplice')

console.log(nomes)

const teste = nomes.slice(0,3)

console.log(teste)

teste.pop()
teste.pop()

console.log(teste)