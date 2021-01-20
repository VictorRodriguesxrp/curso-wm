function tratarErroELancar(erro) {
    throw new Error ('Ocorreu um erro de UpperCase')
}

function imprimirNomeGritado(objeto) {
    try {
        console.log(objeto.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const objeto = {name : 'Victor'}

imprimirNomeGritado(objeto)