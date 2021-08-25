function troca(vetorA, vetorB) {
    if (vetorA.length === vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]            
        }
    }else{
        return "Os arrays não tem mesmo tamanho"
    }

    return [vetorA, vetorB]
}

console.log(troca([1,2,3],[4,5,6]))