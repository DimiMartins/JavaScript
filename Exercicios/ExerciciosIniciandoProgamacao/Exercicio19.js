/* Criar uma função que receba um array de números e retorne o menor número desse array.*/

function menorNumero(array) {
    let menorNumero = array[0]
    for (const i of array) {
        if (array[i]< menorNumero) {
            menorNumero = array[i]
        }
    }
    return menorNumero
}

const array = [583,2,5,8,6,58,1]

console.log(menorNumero(array))