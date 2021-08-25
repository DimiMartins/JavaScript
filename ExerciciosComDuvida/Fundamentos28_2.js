function segundoMaiorValor(vetor) {
    vetor.sort((a, b) => a - b)
    return vetor[vetor.length - 2]
}

console.log(segundoMaiorValor([4,8,12,5,2,3,15,88,52,90]))