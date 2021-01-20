const imprimirResultado = function(nota) {
    if (!isNaN(nota)) {
            if (nota > 7 ) {
                console.log('Aprovado!!')
            } else {
                console.log('Reprovado!!')
               } 
         } else {
             console.log('não é numero')
         }
      }

imprimirResultado(8)


imprimirResultado(4)

imprimirResultado('Epa!')