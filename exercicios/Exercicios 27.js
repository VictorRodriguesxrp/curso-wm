function calculaAltura(altura1, altura2, taxa1, taxa2) {
    let ano = 0
    if (altura1<altura2) {
        console.log('A criança maior é a criança 2') 
        while (altura1<altura2) {
           altura1 += 1** taxa1
           altura2 += 1** taxa2
           ano ++
        }

    if (altura1>altura2) {
        console.log('A criança maior é a criança 2') 
        while (altura2<altura1) {
            altura1 += 1** taxa1
            altura2 += 1** taxa2
            ano ++
        }
    }
}
    return  `A criança menor ultrapassará a criança maior em: ${ano} anos`
}

// console.log(calculaAltura(100,90,10,20))


// exercicio 28

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function lerVetor(vetor) {
   let impar = 0, par = 0

   for(let i in vetor) {
       if (vetor[i] % 2 == 0) {
           par++
       }
      else {
           impar++
       }
   } 
   return `O vetor possui ${par} números pares e ${impar} numeros impares`
}

// console.log(lerVetor(vetor))

//Exercicio 29

function intervalo10E20 (vetor) {
    let qtdeNumeros = 0
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] >=10 && vetor[i] <= 20) {
          qtdeNumeros ++
      }
    }
    return qtdeNumeros
}

const intervalo = [1, 5, 10, 15, 20] 

// console.log(intervalo10E20(intervalo))

// exercicio 30 

function menorEMaiorValor(intervalo) {
    let menorValor
    let maiorValor

    for(let i in intervalo) {
        if (menorValor == undefined && maiorValor == undefined) {
            menorValor = intervalo[i]
            maiorValor = intervalo[i]
        }
        else if (intervalo[i] > maiorValor) {
            maiorValor = intervalo[i]
        } else if (intervalo[i] < menorValor) {
            menorValor = intervalo[i]
        } 
    }
    return `O maior número do vetor é ${maiorValor} e o menor valor é ${menorValor}`
}

console.log(menorEMaiorValor(intervalo))


// exercicio 32

function fncMediaVetores(vetor) {
    elementos = 0
    soma = 0

    for(i in vetor) {
        soma += vetor[i]
        elementos++
    }
    return soma/elementos
}

let vetores = [1, 2, 3, 4, 5]

// console.log(fncMediaVetores(vetores))

let vetorInteiro = [1, 2, 3, 4]
let vetorString  = ['Um', 'Dois', 'Tres', 'Quatro']
let vetorDouble = [1.55, 2.55, 3.55, 4.55]

function concatenar(vetorInteiro, vetorString, vetorDouble) {
    result1 = []
    result2 = []
    for (let i = 0; i <=2; i++) {
        result1[i] = result1.concat(vetorInteiro[1], vetorString[1], vetorDouble[1])
        result2[i] = result1.concat(vetorInteiro[2], vetorString[2], vetorDouble[2])
    } 

    return result1 + '   ' + result2
}

// console.log(concatenar(vetorInteiro, vetorString, vetorDouble))

let string1 = 'TESTE'
let string2 = 'ESTE'

function fncVerificaString(string1, string2) {
     let estaContido = true

     for (let i = 0; i < string1.length; i++) {
         let caractereString1 = string1.charAt(i).toLowerCase()
         for (let j = 0; j < string2.length; j++) {
             let caractereString2 = string2.charAt(j).toLowerCase()

             if (caractereString1 == caractereString2) {
                 estaContido = true
                 break;
             } else {
             estaContido = false
             }
        }
    }
        if (!estaContido) {
            return estaContido
     }
    return estaContido
}

//console.log(fncVerificaString('abc','cba'))

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9 , 10]

function fncAdicionaVetor(vetorPilha, vetorAdiciona) {
    for (i in vetorAdiciona) {
        vetorPilha.push(vetorAdiciona[i])
    }

    return vetorPilha
}

console.log(fncAdicionaVetor(vetorPilha, vetorAdiciona))