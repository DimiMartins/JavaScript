/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicarSemSinal(valor1, valor2) {
    let total = 0
    for (let i = 0; i < valor1; i++) {
        total += valor2
    }
    return total
}

console.log(multiplicarSemSinal(8,5))