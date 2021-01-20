let dobro = function (pA) {
    return 2 * pA
}

let dobroArrow = (pA) =>  2 * pA

console.log(dobro(10))
console.log(dobroArrow(10))


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())

ola = _ => 'Olá'