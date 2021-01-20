//Exemplo de callBack browser

document.getElementsByTagName('body') [0].onclick = function(evento) {
    console.log(`O evento ocorreu! ${evento.target}`)
}