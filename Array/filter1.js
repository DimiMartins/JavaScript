const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPadPro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
// p representa cada produto
console.log(produtos.filter(function(p) {
    // return true -> retorna todos os elementos sem filtrar nada
    // return false -> retorna um array vazio
    return p.fragil == true
}))
// no map o resultado é um elemento trasformado
// no filter o resultado é um filtro em cima de um array

const caros = p => p.preco >= 500
const produtosFrageis = p => p.fragil == true 

console.log(produtos.filter(caros).filter(produtosFrageis))
