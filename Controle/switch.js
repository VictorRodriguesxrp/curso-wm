 const imprimeResultado = function (nota) {
     switch (nota) {
        case 10:
        case 9:
            console.log('Aprovado com Louvor')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4: 
            console.log('Recuperacao')
            break 
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Invalido')
    }
}

imprimeResultado(10)
imprimeResultado(7)
imprimeResultado(4)
imprimeResultado(3)
imprimeResultado(8)




