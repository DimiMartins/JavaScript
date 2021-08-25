function casasDecimais(vetor, qtdeCasas) {
    return vetor.filter(numero => {
        const qtdeDigitos = String(numero).length
        return qtdeDigitos === qtdeCasas
    })
}

console.log(casasDecimais([456,1523,422,7821,548,4831,2,3,5], 3))