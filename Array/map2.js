//desafio
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.72}',
    '{"nome": "Caneta", "preco": 3.45}'
]

let converterJson = e => JSON.parse(e)
let pegarPreco = e => `R$${e.preco.toFixed(2)}`

let precos = carrinho.map(converterJson).map(pegarPreco)

console.log(precos)