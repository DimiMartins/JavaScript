/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function casas(array, qtdeCasas) {
    return array.filter(n => {
        const qtdeDigitos = String(n).length

        return qtdeDigitos === qtdeCasas
    })
}

console.log(casas([22,1,3,5,88],2))