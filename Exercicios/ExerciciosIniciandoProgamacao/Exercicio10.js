/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function qtde(n) {
    let valorFinal = ''
    for (let i = 0; i < n; i++) {
        valorFinal += "+"
    }
    return valorFinal
}

console.log(qtde(5))