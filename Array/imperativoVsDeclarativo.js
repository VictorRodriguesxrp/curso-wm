const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2},
    { nome: 'Victor', nota: 10},
    { nome: 'Alejandro', nota: 9}
]

// imperativo

let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativa

const getNota = (p) => p.nota
const getSoma = (total, atual) => total + atual
const total2  = alunos.map(getNota).reduce(getSoma)
console.log(total2 / alunos.length)

// SELECT CODIGO, NOME, EMAIL FROM CLIENTES WHERE ATIVO = 'FALSE'