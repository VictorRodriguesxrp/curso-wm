const escola = "Cod3r"

console.log(escola.charAt(3), escola.charCodeAt(3))
console.log(escola.indexOf('r'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola: '.concat(escola).concat("! ConcatComFrescura"))
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,"e")) // substitui todos os numeros
console.log(escola.replace(/\w/g,"e")) // substitui todos os caracteres

console.log('Victor, Teste, Pedro'.split(','))




const teste = "Cod3r"
console.log(teste.charAt(3), teste.charCodeAt(3))
console.log(teste.indexOf('r'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log("Escola: ".concat(teste).concat("!Pratica"))
console.log(teste.replace("3","e"))
console.log(teste.replace(/\w/g, "k"))

const e = 'Victor, José, Antonio'

console.log(e.split(","))