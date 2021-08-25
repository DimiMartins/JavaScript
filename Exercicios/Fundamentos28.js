function parImpar(vetor) {
    let pares = []
    let impares = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares.push(vetor[i])
        }else{
            impares.push(vetor[i])
        }
    }

    return [pares, impares]
}

console.log(parImpar([2,3,4,5,6,7,8,65]))