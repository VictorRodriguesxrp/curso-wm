// function gerarNumerosEntre(min, max) {
//     if (min > max) {
//         [max, min] = [min, max]
//     }

//     return new Promise (function (resolve) {
//         const aleatorio = parseInt(Math.random() * (max - min + 1)) + min 
//         resolve(aleatorio)
//     })
// }

// gerarNumerosEntre(1, 60)
// .then(n => n*10)
// .then(numX10 => `O número retornado foi o ${numX10}`)
// .then(console.log)

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise (resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1,60)
.then(n => n*10)
.then(console.log)