
let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

 
p.then((valor) => valor[0])
 .then((primeiro) => primeiro[0])
 .then((letra) => letra.toLowerCase())
 .then(minuscula => console.log(minuscula))

const primeiroElemento = (elemento) => elemento[0] //retorna o primeiro elemento de um array ou uma string
const primeiraLetraMinuscula = (S) => S.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
}).then(primeiroElemento)
.then(primeiroElemento)
.then(primeiraLetraMinuscula)
//.then(v => console.log(v))
.then(console.log)

//console.log(typeof p)


//ao inves de definir funções dentro do then, da para passar como parâmetro
