/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

const array = ['q',2,'3',54,'jhfgb']

function numeros(array) {
    const soNumeros = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            soNumeros.push(array[i])
        }
    }
    return soNumeros
}

console.log(numeros(array))