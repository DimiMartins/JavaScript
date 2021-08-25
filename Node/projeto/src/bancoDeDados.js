const sequece = {
    _id: 1,
    get id(){return this._id++}
}

//objeto que tem como chave cada um dos id e o valor vai ser nome e preco do produto
const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequece.id
        produtos[produto.id] = produto//produto.id é a chave
    }
    return produto
}
//função para pegaro produto por id
function getProduto(id) {
    return produtos[id] || {} // retorna o produto e se estiver vazio retorna um objeto vazio
}

//função para retornar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}
//função para excluir produtos
function excluirProdutos() {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto, getProduto, getProdutos, excluirProdutos
}