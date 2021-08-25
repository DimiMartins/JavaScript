function par(vetor) {
    let elementosPares = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0 && i % 2 == 0) {
            elementosPares.push(vetor[i])
        }
    }
    return `Elementos pares ==> ${elementosPares}`
}

let vetor = [2,1,8,3,7,4]

console.log(par(vetor))