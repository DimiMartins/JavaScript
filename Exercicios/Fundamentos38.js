function impar(inicio = 0 , fim = 100) {
    if (inicio > fim) {
        inicio = inicio + fim 
        fim = inicio - fim
        inicio = inicio - fim
    }

    let impares = []

    for (let i = inicio; i < fim; i++) {
        if (i % 2 == 1) {
            impares.push(i)
        }
    }
    
    return impares
}

console.log(impar(20,10))