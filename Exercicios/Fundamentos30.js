function maiorEMenor(vetor) {
    let maiorValor
    let menorValor 
    for (let i = 0; i < vetor.length; i++) {
        if (maiorValor === undefined && menorValor === undefined) {
            maiorValor = vetor[i]
            menorValor = vetor[i]
        }else{   
            if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
        }
            if (vetor[i] < menorValor ) {
            menorValor = vetor[i]
        }
        }
        
    }
    return [maiorValor, menorValor]
}

console.log(maiorEMenor([1,2,3,4,5,6,80]))