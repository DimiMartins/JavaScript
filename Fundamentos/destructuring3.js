// vou passar um objeto para essa função e dentro dessa função eu quero que ele tire os dois atributos prontos
// usando destructuring
function rand({min = 0, max = 1000}){
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)

}
// usando obj
const obj = { max: 50, min: 40}
console.log(rand(obj))

console.log(rand ({min: 935}))
console.log(rand ({}))