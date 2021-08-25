// objPessoa -> 123 -> {..}
const pessoa = {nome: 'Joao'}
pessoa.nome = "pedro"
console.log(pessoa)

// se o mesmo objeot apontar para um endereço de memoria diferente vai dar excessao

// pessoa -> 456 -> {..}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // congela o objeto pessoa, não é posssivel mais mudar os atributos do obj pessoa

pessoa.nome = "Maria"
pessoa.end = "Rua abc"
delete pessoa.nome // depois do freeze nãoo é possivel nem deletar

console.log(pessoa.nome)
console.log(pessoa)

// criando um objeto cujo os atributos não mudam
const pessoaCosntante = Object.freeze({ nome: "Josué"})
pessoaCosntante.nome = 'Maria'
console.log(pessoaCosntante)

