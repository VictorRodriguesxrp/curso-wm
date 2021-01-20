// setTimeout(function(){
//     console.log('Executando callback')

//     setTimeout(function () {
//         console.log('Executando callback')
        
//         setTimeout(function(){
//             console.log('Executando callback')

//         }, 3000)
//     }, 2000)
// }, 2000)


// new Promise(function (resolve) {
//     resolve(setTimeout(() => {
//        console.log('Executando Callback')   
//     }, 2000))
// }).then(setTimeout(function () {
//     console.log('Executando callback Timeout')
// }, 2000))

// function esperarPor(tempo = 2000) {
//     return new Promise(function(resolve) {
//         setTimeout(function () {
//             console.log('Executando Promise')
//             resolve()
//         }, tempo)
//     })
// }


// esperarPor(3000)
// .then(() => esperarPor())
// .then(esperarPor)


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('Executando a danada da promise')
            resolve()
        }, tempo);
    })
}

esperarPor(3000)
.then(() => esperarPor(5000))
.then(() => esperarPor(10000))