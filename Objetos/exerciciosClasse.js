// criar classe lancamentos
// criar classe ciclo financeiro que recebera os lançamentos e retornara a soma dos lancamentos
// criar dois lancaçamentos

class Lancto {
    constructor (nome, valor) {
        this.nome = nome
        this.valor = valor
    }
}

class Financeiro {
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lanctos = []
    }
   
    addLancamentos(...lanctos) {
        lanctos.forEach (l => this.lanctos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lanctos.forEach(l => {
            valorConsolidado += l.valor
        })
        return `O valor movimentado do período informado é ${valorConsolidado}`
    }
}

const planoContas = new Financeiro(9,2018)

const salario       = new Lancto('Salario', 2000)
const contaNotebook = new Lancto('Notebook', -400)

planoContas.addLancamentos(salario, contaNotebook)

console.log(planoContas.sumario())



class avo {
   constructor (sobrenome) {
       this.sobrenome = sobrenome
   }
}

class pai extends avo {
    constructor (sobrenome, profissao = 'Programador') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor (sobrenome) {
        super('Rodrigues')
    }
}

Filho = new filho

console.log(Filho)