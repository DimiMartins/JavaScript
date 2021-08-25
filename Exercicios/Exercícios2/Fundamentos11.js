function primeiroEUltimo(vetor) {
    let primeiro = vetor[0]
    let ultimo = vetor[vetor.length - 1]
    return [primeiro, ultimo]
}

console.log(primeiroEUltimo([1,2,3,4,5,6]))