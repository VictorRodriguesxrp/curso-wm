const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
}


//criar um array e acrescentar uma propriedade no array, sendo uma função


const funcs2 = []

for (var i = 0; i < 10; i++){
    funcs2.push(function (){
        console.log(i)
    })
}