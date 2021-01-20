// Array.prototype.forEach2 = function (fncCallback) {
//     for (let i = 0; i < this.length; i++) {
//         fncCallback(this[i], i, this)
//     }
// }

//criando um novo método dentro do array, uma nova funçao que não existe na API para simular o forEach
//passando uma funçao callback como parâmetro

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach3 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach3((nome, indice) => console.log(`${indice+1}) ${nome}`))