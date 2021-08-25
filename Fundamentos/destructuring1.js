// operador de desestruturação, tira da estrutura (objeto) alguma coisa 
// novo recurso introduzido em 2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 1000
    }
}
// usando o operador destructuring {}
// tire do objeto pessoa o atributo nome e idade
const {nome, idade } = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)
                // definindo valor padrao
const {sobrenome, bemHumorada = true} = pessoa // retorna undefined
console.log(sobrenome, bemHumorada)

const{endereco: logradouro, numero} = pessoa
console.log(logradouro, numero)

