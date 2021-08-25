//objeto = coleção dinamica de pares chave / valor

const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)


const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco:{
            loggradouro: "ABC",
            numero: 123
        }
    },
    //array de objetos
    condutores: [{
        nome: "junior",
        idade: 19
    },{
        nome: "Ana",
        idade: 42
    }],

    calcularValorDoSeguro: function(){
        //...
    }
}

// para acessar basta usar a notação ponto

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['loggradouro'] = "Avenida Gigante"

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro

console.log(carro)
console.log(carro.condutores) // da undefined
console.log(carro.condutores.length) // da erro