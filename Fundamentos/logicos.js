function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50    = trabalho1  && trabalho2
    const comprarTv32    = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete
    
    return {comprarSorvete: comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} 
    // para retornar mais de uma variável é necessário criar um objeto
    // não é necessário informar chave e valor, caso o nome da chave esteja implítico como nos tres ultimos itens, o nome da chave
    // assume o nome da variável  
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

