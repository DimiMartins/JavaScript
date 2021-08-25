//rever
function menorNumero1(vetor) {
    menorValor = vetor[0]
    for (const i in vetor) {
        if (vetor[i]< menorValor) {
            menorValor = vetor[i]
        }
    }
    return menorValor
}
console.log(menorNumero1([1,2,3,4,5,6]))

function menorValor2(vetor) {
    return vetor.reduce((anterior, atual)=> anterior < atual ? anterior : atual)
}
console.log(menorValor2([1,2,3,4,5]))