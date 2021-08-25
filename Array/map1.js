const nums = [1,2,3,4,5]
// for com parametro
// o map retorna um novo array
let resultado = nums.map(function (e) {
    return e * 2
}) // o map n transforma o array atual
console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace(".",",")}`

// resultado de um MAP é um novo ARRAY 
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
