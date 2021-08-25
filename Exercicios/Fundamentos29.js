function entre(vetor) {
    let contador = 0 
    for (let i = 0; i < vetor.length; i++) {
       
        if (vetor[i]>=10  && vetor[i]<=20) {
            contador++
        }
    }
    return contador
}

console.log(entre([8,9,10,11,12,13]))