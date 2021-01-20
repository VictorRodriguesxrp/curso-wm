// function gerarNumerosEntre(min, max, tempo = 2000) {
//     if (min > max) {
//         [min, max] = [max, min]
//     }
//     return new Promise (resolve => {
//         setTimeout(() => {
//             const fator = max - min + 1
//             const aleatorio = parseInt(Math.random() * fator) + min
//             resolve(aleatorio)        
//         }, tempo);
//     })
// }

// function gerarVariosNumeros() {
//     return Promise.all([
//         gerarNumerosEntre(1, 60, 1000),
//         gerarNumerosEntre(1, 60, 4000),
//         gerarNumerosEntre(1, 60, 100),
//         gerarNumerosEntre(1, 60, 5000),
//     ])
// }

// console.time('promise')

// gerarVariosNumeros()
// .then(console.log)
// .then(() => {
//     console.timeLog('promise')
//     console.timeEnd('promise')
// })






function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)    
        }, tempo);
    })
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(10,100,1000),
        gerarNumerosEntre(10,11,1000),
        gerarNumerosEntre(10,1000,5000),
        gerarNumerosEntre(10,10000,1000),
        gerarNumerosEntre(10,2000,1000),
    ])
}

console.time('promise')

gerarVariosNumeros()
.then(console.log)
.then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
})
