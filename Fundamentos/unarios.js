let num1 = 1, num2 = 2

num1++
console.log(num1)

function IncrementarNumero(pNumero){
    for (var i = 1; i<100; i++)
    {
        pNumero++
    }
    return console.log(pNumero)
}

IncrementarNumero(10)

--num1

console.log(num1)   

console.log(++num1 === num2--)
console.log(num1 === num2)



