Array.prototype.map2 = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}




//desafio2
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.72}',
    '{"nome": "Caneta", "preco": 3.45}'
]

let converterJson = e => JSON.parse(e)
let pegarPreco = e => `R$${e.preco.toFixed(2)}`

let precos = carrinho.map2(converterJson).map2(pegarPreco)

console.log(precos)