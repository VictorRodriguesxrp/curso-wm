// function gerarNumerosEntre(min, max, numerosProibidos) {
//     if (min < max) {
//         [min, max] = [max, min]
//     }
//     return new Promise ((resolve, reject) => {
//         const fator = (max - min + 1)
//         const aleatorio = parseInt(Math.random() * fator) + min
//         if(numerosProibidos.includes(aleatorio)) {
//             reject('Numero repetido')
//         } else {
//             resolve(aleatorio)
//         }
//     })
// }


// async function gerarMegaSena(qtdeNumeros) {
//     try {
//         const numeros = []
//         for (let _ of Array(qtdeNumeros).fill()) {
//             numeros.push(await gerarNumerosEntre(1, 60, numeros))
//     }
//         return numeros
//     } catch(e) {
//         throw "Deu erro"
//     }
// }

// // gerarNumerosEntre(1, 5, [1,2,4])
// // .then(console.log)
// // .catch(e => console.log(`Ocorreu um erro no sorteio: ${e}`))


// gerarMegaSena(6)
// .then(console.log)
// .catch(console.log)


function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise ((resolve, reject) => {
        const fator = max - min + 1
        aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Deu Erro')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill())  {
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) 
        }
        return numeros
    } catch (e) {
        throw 'Deu erro'
    }
}

// gerarNumerosEntre(1, 5, [1,2,3,4])
// .then(console.log)
// .catch(console.log)


gerarMegaSena(6)
.then(console.log)
.catch(console.log)