const pai = {nome: "pedro", corDoCabelo: "Preto"}
const filha1 = Object.create(pai) // criando um objeto passando o pai como prototipo(herança) para filha
filha1.nome = "Ana"
console.log(filha1.corDoCabelo)

// foii passado um objeto como parametro
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

//value = valor do objeto
//writable = se o valor pode ser mudado ou não
//enumerable = se o valor pode ou não ser listado


console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


console.log("Usado para saber se um atributo veio ou NÃO por herança\n")
for(let key in filha2){
    filha2.hasOwnProperty(key)?// aquela propriedade pertence a ela passando o nome da chave como parametro
    console.log(`Não veio por herança: ${key}`): console.log(`Veio por Herança: ${key}`)
}