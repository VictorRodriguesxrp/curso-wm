function falarDepoisDe(tempo, frase) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
           resolve(frase)
        }, tempo * 1000)
    })
}

falarDepoisDe(3, 'Que Legal')
    .then(frase => frase.concat('??@'))
    .then(outraFrase => console.log(outraFrase))



