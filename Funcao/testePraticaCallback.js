const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

notasBaixas1 = []

for(let i in array) {
    if (array[i] <= 7) {
        notasBaixas1.push(array[i])
    }   
}

console.log(notasBaixas1)


notasBaixas2 = array.filter(function (nota) {
    return nota > 7
})

console.log(notasBaixas2)

notasBaixas3 = array.filter(nota => nota >= 2 && nota <=6)

console.log(notasBaixas3)