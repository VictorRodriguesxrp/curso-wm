function area (largura, altura) { 
    const area = altura * largura
    if (area > 20) {
        console.log(`Altura acima do pertimitido: ${area}md2.`)
    } else {
        return console.log(`Area ok: ${area}`)
    }
}

area(10,1)

