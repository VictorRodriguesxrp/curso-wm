// try catch throw finally

function fncTrataErro(erro) {
    throw new Error ('Ocorreu um erro amigao')
}

function imprimeNome(psNome) {
    try {
        imprimeNome.Teste.toUpperCase
    } catch(e) {
        fncTrataErro(e)
    } finally{
        console.log('Acabou')
    }
}

imprimeNome('Victor')