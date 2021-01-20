const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//mulher chinesa com o melhor valor

const mulher = function (objeto) {
    if (objeto.genero === 'F') {
        return true
    } else {
        return false
    }
}

const chinesa = function (objeto) {
    if (objeto.pais === 'China') {
        return true
    } else {
        return false
    }
}

const menorSalario = function (func, funcAtual) {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// const menorSalario = (func, funcAtual) => {
//     return func.salario < funcAtual.salario ? func: funcAtual
// }

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(this.funcionarios)
    

    const func = funcionarios.filter(chinesa).filter(mulher).reduce(menorSalario)
    console.log(func)
})

//funcionarios


