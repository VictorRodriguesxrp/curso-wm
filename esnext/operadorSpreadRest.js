//operador ... rest(juntar) / spread(espalhar)

// usar rest com parâmetros de uma função

//spread com objetos, como espalhar os atributos de um objeto para o outro, usando o spread

const funcionarios = {nome: 'Maria', salario: 9000.00}
const clone = {...funcionarios, cargo: 'Gerente'}

console.log(clone)

// usar spread no contexto de array

grupoA = ['Victor', 'Ana', 'Pedro']
grupoB = ['Carlos', ...grupoA, 'Antonio']

console.log(grupoB)

