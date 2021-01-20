const pai = {nome: 'Carlos', corCabelo : 'Preto'}
const filho = {__proto__: pai}

const neto = Object.create(pai, {
    peso: {value: '60kg', writable : false, enumerable : true}
})

console.log(Object.keys(neto))

for (let key in neto) {
    neto.hasOwnProperty(key) ?
       console.log(key) : console.log(`Atributo herdado ${key}`)

}

const carro = {
    velAtual : 0,
    velMaxima : 0,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.VelMaxima
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMaxima} km.h`
    }
}

const cabacelta = {
    modelo: 'Cabaço Power',
    velMaxima: 150
}

Object.setPrototypeOf(cabacelta, carro)

cabacelta.acelerar(100)

console.log(cabacelta.status())