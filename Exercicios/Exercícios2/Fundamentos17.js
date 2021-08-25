function despesas(produto) {
    return produtos.map(p => p.preco).reduce((acumulador,valorAtual) => {
        const total = (acumulador += valorAtual)
        return `R$${total.toFixed(2)}`
    } )
}

const produtos = [{
    nome: "arroz",
    preco: 12.44
},{
    nome: "feijao",
    preco: 8.99
}]

console.log(despesas(produtos))