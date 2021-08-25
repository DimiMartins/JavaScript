/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

const array = [1,2,5,6,3,8,9,45,6,25]

function somarArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(somarArray(array))