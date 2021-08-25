function negativos(vetor) {
    let contadorNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i]< 0) {
            contadorNegativos++
        }
        
    }
    return contadorNegativos
}

console.log(negativos([-2,-3,-6,25]))