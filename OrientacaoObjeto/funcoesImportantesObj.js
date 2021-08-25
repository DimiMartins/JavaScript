const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves de um objeto
console.log(Object.values(pessoa)) // pega todos os valores
console.log(Object.entries(pessoa)) // pega chave e valor e retorna em um array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log("passando um operador destructuring")
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
  //taget     nome           passa objeto
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false,
    writable: false, // não aceita ser reescrita
    value: "01/01/2019"

}) // define a propriedade de um objeto

pessoa.dataNascismento = "01/01/2017"
console.log(pessoa.dataNascismento)
console.log(Object.keys(pessoa))


//ovject.assign
const dest = {a: 1} // objeto que vai receber os atributos
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // o valor de a vai ser subscrito

const obj = Object.assign(dest,o1,o2)

// concatenação de todos os atributos listados acima
console.log(dest)

Object.freeze(obj)
obj.c = 2134
console.log(obj)