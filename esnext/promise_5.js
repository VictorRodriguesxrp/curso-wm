// function funcionarOuNao (valor, chanceErro) {
//     return new Promise ((resolve, reject) => {
//        if (Math.random() < chanceErro) {
//            reject('Erro reject da promise')
//        } else {
//            resolve(valor)
//        }
//     }) 
// }

// funcionarOuNao('Valor teste', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(
//         v => consol.log(v),
//         erro => console.log(`Ocorreu  um erro exatamente neste bloco then: ${erro}`)
//     )
//     .catch(erro => console.log(`Ocorreu um erro na aplicação: ${erro}`))



function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Promise foi rejeitado')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Valor teste', 0.2)
    .then(console.log)
    .catch(erro => console.log(`Tratando o erro: ${erro}`))