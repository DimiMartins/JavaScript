function numeros(vetor) {
    let numerico = []
    for (let i = 0; i < vetor.length; i++) {
        const tipo = typeof vetor[i]
        if (tipo == "number") {
            numerico.push(vetor[i])
        }
    }
    return numerico
}

let vetor = ["A","b",2,"c",4,5,8]

console.log(numeros(vetor))