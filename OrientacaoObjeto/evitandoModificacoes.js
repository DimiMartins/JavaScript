//Object.preventeExtensions - não deixa que seu objeto seja extendido
const produto = Object.preventExtensions({
    nome: "qualeqeu" , preco: 1.99, tag:"promocao"
})

console.log("extensível: ", Object.isExtensible(produto))


// nesse cenario utilizando o preventEstensions não é possivel adicionar novos atributos, novas chaves e valores
produto.nome ="borracha" 
produto.descriacao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal == selar
//utilizando o seal não é possivel adicionar novos atributos, nem excluir atriobutos, porem é possivel modificar os atributos exeistentes do objeto
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado", Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa)

//object.frezze = selado + valores constantes
