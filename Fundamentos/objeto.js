const prod1 = {} //forma literal de escrever um objeto
prod1.nome = 'Celular Ultra Mega' // objetos são grupos de chave valor
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)
// objetos são um conjunto de chave e valor
const prod2 = {
    nome: "Camisa polo",
    preco: 79.90
}

console.log(prod2)
//JSON não é mesma coisa que objeto 
// ex JSON (valor textual)
'{"nome": "Camisa polo","preco": 79.90}'
