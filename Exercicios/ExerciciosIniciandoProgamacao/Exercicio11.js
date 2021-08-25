/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

const array1 = [15,2,3,5,6,8,9]

function primeiroEUltimoElemento(array) {
    let aFinal = []
    aFinal.push(array[0])
    aFinal.push(array[array.length - 1])
    return aFinal
}

console.log(primeiroEUltimoElemento(array1))