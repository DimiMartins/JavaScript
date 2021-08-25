const peso1 = 1.0
const peso2 = Number("2.2")

console.log(peso1, peso2)
// para saber se o number é inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso2+ peso1)
console.log(media.toFixed(2)) // tofixed -> arrendonda para quantas casas decimais quiser
console.log(media.toString(2)) // trasnforma em string, se colocar o 2 como parametro tranforma em binario
console.log(typeof media)
console.log(typeof Number) // com N maisusculo é função
// number com n minusculo é o tipo do dado (tipo primitivo no java)
