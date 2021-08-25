function media(vetor) {
    let resultado = 0
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i]
    }
    return resultado / vetor.length
}

console.log(media([1,2,3,4,5]))
