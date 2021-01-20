console.log(Math.floor(6.1))

const obj = {

}

obj.nome = 'Bola'
//obj['nome'] = 'Bola'
console.log(obj.nome)

function Obj1(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Executando...')
    }
}

const obj2 = new Obj1('Victor')
const obj3 = new Obj1('Paulo')

console.log(obj2.nome, obj3.nome)

obj3.exec()


objeto.nome = 'Nome do Objeto'

function objeto(nome) {
    this.nome   = nome
    this.funcao = function(pA,pB){
       return console.log(pA + pB)
    }
}

const objeto1 = new objeto
const objeto2 = new objeto

objeto2.funcao(5,5)