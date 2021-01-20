const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (nome, indice) => console.log(`${indice+1}) ${nome}`)

// const exibirAprovados = function (nome, indice) { exemplo de notação literal da função acima
//     console.log(`${indice+1}) ${nome}`)
// }

aprovados.forEach(exibirAprovados)