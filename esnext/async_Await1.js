// function esperarPor(tempo = 2000) {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve()
//         }, tempo);
//     })
// }

// // esperarPor(2000)
// //     .then(() => console.log('Executando promise 1...'))
// //     .then(esperarPor)
// //     .then(() => console.log('Executando promise 2...'))
// //     .then(esperarPor)
// //     .then(() => console.log('Executando promise 3...'))

// function retornaValor() {
//     return new Promise (resolve => {
//         setTimeout(() => resolve(10) , 500)
//     })
// }

// async function executar () {
//     let valor = await retornaValor()

//     await esperarPor(2000)
//     console.log(`Async/Await ${valor}...`)
//     await esperarPor(2000)
//     console.log(`Async/Await ${valor + 1}...`)
//     await esperarPor(2000)
//     console.log(`Async/Await ${valor + 2}...`)

//     return valor + 3
// }

// executar().then(console.log)

// //executando com sincronismo

// async function executarDeVerdade() {
//     resultado = await executar()
//     console.log(resultado)
// }

// executarDeVerdade()



// // esperarPor(2000)
// //     .then(() => console.log('Executando promise 1...'))
// //     .then(esperarPor)
// //     .then(() => console.log('Executando promise 2...'))
// //     .then(esperarPor)
// //     .then(() => console.log('Executando promise 3...'))


function esperarPor(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }
        , tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1'))
//     .then(esperarPor())
//     .then(() => console.log('Executando Promise 2'))
//     .then(esperarPor())
//     .then(() => console.log('Executando promise 3'))


async function executar() {
    let valor = await retorna()
    await esperarPor(5000)
    console.log(`Async/Await valor ${valor}`)
    await esperarPor(1000)
    console.log(`Async/Await valor ${valor+1}`)
    await esperarPor(1000)
    console.log(`Async/Await valor ${valor+10}`)
}

function retorna() {
    return new Promise (resolve =>
        setTimeout(() => {
            resolve(10)
        }, 2000))
}

executar()