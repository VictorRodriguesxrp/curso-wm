// não aceita repetição / não indexada

const { time } = require("console")

const times = new Set()

times.add('Vasco')
times.add('Corinthians').add('Palmeiras').add('São Paulo')
times.add('Flamengo')
times.add('Vasco')

console.log(times)

console.log(times.has('Vasco'))