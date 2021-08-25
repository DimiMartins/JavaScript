/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

const despesasTotais = ([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])

function somarDespesas(objeto) {
    let total = 0
    for (const produtos of objeto) {
        total += produtos.preco
    }
    return `O total de gastos é de R$${total.toFixed(2)}` 
}
console.log(somarDespesas(despesasTotais))