// variavel sem atribuição nenhuma, sem inicialização
let valor
console.log(valor) // undefined

valor = null // não aponta para nenhum endereço de memomria, não tem nenhum valor primitivo
console.log(valor)
//console.log(valor.toString())//não pode ler o null

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

//produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preço)// undefined = falso
console.log(produto)
//delete produto.preco // para excluir e ter um objeto vazio
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)