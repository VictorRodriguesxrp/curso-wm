const cumprimentar = function(nome) {
    return 'Olá, '.concat(nome).concat('!')
}

console.log(cumprimentar('Victor'))

const converterAnosParaDias = function (anos) {
    let resultado = ''
    if (typeof anos == 'number') {
        resultado = `A quantidade de anos convertidos em dias é ${anos*365}`
    } else {
        resultado = 'Valor inválido'
    }
    return resultado
}

console.log(converterAnosParaDias(30))


const calculaSalario = function (QtdeHoras, vlrHoras) {
    let Salario = 'R$ '.concat((QtdeHoras * vlrHoras).toFixed(2).replace('.',','))
    return Salario
}

console.log(calculaSalario(150, 40.5))


const retornarMes = function (mes) {
    switch(mes) {
        case 1:
            return 'Janeiro'
            break
        case 2: 
            return 'Fevereiro'
            break
        case 3: return 'Março'
            break
        case 4: return 'Abril'
            break
        case 5: return 'Maio'
           break
        case 6: return 'Junho'
           break
        case 7: return 'Julho'
           break
        case 8: return 'Agosto'
           break
        case 9: return 'Setembro'
           break
        case 10: return 'Outubro'
           break
        case 11: return 'Novembro'
           break
        case 12: return 'Dezembro'
    default: 
        return 'Valor inválido'
    }
}

console.log(retornarMes(1))
console.log(retornarMes(14))


const maiorOuIgual = function (n1, n2) {
    if (n1 > n2) {
        return 'O primeiro número É maior que o segundo'
    } else {
        return 'O primeiro número NÃO é maior que o segundo'
    }
}

console.log(maiorOuIgual(5,3))

function inverso(parametro) {
    if (typeof parametro == 'boolean') {
        if (parametro) {
            parametro = false
        } else {
            parametro = true
        }
    } else if (typeof parametro == 'number') {
        if (parametro < 0) {
            parametro = Math.abs(parametro)
        } else {
            parametro *= -1
        }
    } else {
        parametro = `booleano ou inteiro esperado, mas o parâmetro informado é do tipo ${typeof parametro}`
    }
    return parametro
}

console.log(inverso('a'))


const inverso2 = function (valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
        return `booleano ou inteiro esperado, mas o parâmetro informado é do tipo ${tipo}`
}

console.log(inverso2(1))

const estaEntre = function (inicial, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return (inicial >= minimo && inicial <= maximo)
    } else {
        return (inicial > minimo && inicial < maximo)
    }
}

console.log(estaEntre(50, 10, 100, true))

const multiplicar = function (numero1, numero2) {
    let resultado = 0

    for (let i = 0; i < numero2; i ++) {
        resultado += numero1
    }
    return resultado
}

console.log(multiplicar(5,60))


const repetir = function (elemento, repeticoes) {
    let retorno = []
    for (let i = 0; i <repeticoes; i ++) {
        retorno.push(elemento)
    }
    return retorno 
}

console.log(repetir('Victor', 3))

const repetirLetra = function (repeticoes) {
    let resultado = ''
    for (let i = 0; i < repeticoes; i++) {
        resultado += '+'
    }
    return resultado
}

console.log(repetirLetra(3))


const pArray = [1, 2, 3, 4, 5, ,6]

const primeiroUltimo = function (param) {
    let resultado = []
    resultado.push(param.shift())
    resultado.push(param.pop())
    return resultado
}

console.log(primeiroUltimo(pArray))

obj = {
    nome: 'Victor',
    idade: 24,
    peso : 77
}

const removerPropriedade = function (obj, propriedade) {
    resultado = Object.assign({}, obj)
    delete resultado[propriedade]
    return resultado
}

console.log(removerPropriedade(obj, "peso"))

const objeto = {
    nome: "Maria",
    profissao: "Desenvolvedora de Sistemas",
    idade: 20
}

const arrayParaObjeto = function(obj) {
    let resultado = []

    for (let i in objeto) {
        resultado.push([i, objeto[i]])
    }
    return resultado
}

console.log(arrayParaObjeto(objeto))

const receberSomentePares = function (array) {
    let resultado = []
    
    for (let i = 0; i < array.length; i += 2) {
        if (array[i] % 2 == 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(receberSomentePares([10,2,4,6,7]))


const checarAnoBissexto = function (ano) {
    resultado = `O ano informado não se trata de um ano Bissexto (${ano})` 
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        resultado = `O ano informado é um ano Bissexto (${ano})`  
    }
    return resultado
}

console.log(checarAnoBissexto(2020))


const somarNumeros = function (numeros) {
     resultado = numeros.reduce((acumulador, numero) => numero + acumulador,0 )
     return resultado
}

console.log(somarNumeros([3,9,3]))


const produtosDespesas = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Informação", preco: 150}
]

const resultaDespesas = function (nums) {
    let resultado = 0
    for (let i of nums) {
        resultado += i.preco
    }
    return `Valor total ${'R$ '.concat(resultado.toFixed(2).replace('.',','))}`
}

console.log(resultaDespesas(produtosDespesas))


const salarioWeb = [50, 10, 20, 30] 

const calcularMedia = function (salario) {
    let resultado = 0
    for (let i = 0; i < salario.length; i++) {
        resultado += salario[i]
    }
    return resultado / salario.length
}

console.log(calcularMedia(salarioWeb))

const menorValor = function (salario) {
    resultado = salario[0]
    for (let i = 0; i < salario.length; i++) {
        if (salario[i] < resultado) {
            resultado = salario[i]
        }
    }
    return resultado
}

console.log(menorValor(salarioWeb))

const funcaoDaSorte = function (numero) {
    sorteio = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    if (numero == sorteio) {
        return `Que sorte! Voce acertou o numero ${numero}`
    } else {
        return `O número sorteado foi o ${sorteio}`
    }
}

console.log(funcaoDaSorte(1))


const contarPalavras = function (frase) {
    palavras = frase.split(" ")
    console.log(palavras.length)
}

contarPalavras('Eu sou uma frase')

const contarCaractere = function (caracter, frase) {
    contador = 0
    for (let i = 0; i < frase.length; i++) {
        if (caracter == frase.charAt(i)) {
            contador++
        }
    }
    return contador
}

console.log(contarCaractere('i', 'atirei'))

const buscarPalavras = function (expressao, lista) {
    const resultado = []

    for (let palavra of lista) {
        if (palavra.includes(expressao)) {
            resultado.push(palavra)
        }
    }
    return resultado
}

console.log(buscarPalavras("Vic", ["Victor", "Carlos", "Pedto"]))


const substituirVogais = function (frase) {
    const vogais = ['a', 'b']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}

console.log(substituirVogais('atribuir'))