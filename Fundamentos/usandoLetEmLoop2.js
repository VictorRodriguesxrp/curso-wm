const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
}


funcs[2]()
funcs[8]()
//criar um array e acrescentar uma propriedade no array, sendo uma função


const funcs2 = []

for (let i = 0; i < 10; i++){
    funcs2.push(function (){
        console.log(i)
    })
}