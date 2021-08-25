/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */

function mediadeUmArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    let media = total / array.length
    return `A média é de ${media.toFixed(1)}`
}

console.log(mediadeUmArray([1,2,3,4,5]))