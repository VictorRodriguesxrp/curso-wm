function func1() {

}

const fun2 = function () {

}
 
const array = [function(a,b) {return a+b}, func1, fun2]

console.log(array[0](2,5))

// armazenar em um atributo de objeto

const obj = {}

obj.falar = function() {return 'Opa'}

console.log(obj.falar())

function run(fun) {
    fun()
}

run(function (){console.log('TestandoFuncaoPassadaPorParametro')})


function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(10,5) (20)

const cincoMaisDez = soma(10,5) 

cincoMaisDez(15)