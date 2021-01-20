const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

const resultado = alunos.map(arrayDeObjetos => arrayDeObjetos.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)

const bolsistaSN = alunos.map(parametro => parametro.bolsista)

const resultado = bolsistaSN.reduce(function(vlInicial, vlAtual){
   let todosBolsistas
    if (vlInicial.bolsista == false || vlAtual.bolsita == false) {
    todosBolsistas = false
   }

   return `Todos os alunos serão bolsistas? ${todosBolsistas}`
})

console.log(resultado)


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => bolsista || resultado

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
