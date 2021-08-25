function media(vetor) {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }
    return total / vetor.length
}

console.log(media([1,2,3,4,5]))

function media2(vetor) {
    const total = vetor.reduce((acumulador, n) => acumulador += n)
    return total / vetor.length
}

console.log(media2([1,2,3,4,5]))