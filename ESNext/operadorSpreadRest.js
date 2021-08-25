//operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função 

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 123456.00}
const clone = {ativo: true, ...funcionario}//pegando todos os atributos de funcionario e espalhando dentro de clone
console.log(clone)

//usar spread no array
const grupoA = ["joao", 'pedro', 'gloria']
const grupoFinal = ["maria",'rafaela', ...grupoA]
//vou espalhar todos os elementos do grupo a dentro do grupo final

console.log(grupoFinal)