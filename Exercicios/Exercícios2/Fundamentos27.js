function casasDecimais(vetor, qtdeCasas) {
    return vetor.filter(n =>{
        const quantidadeDigitos = String(n).length
        return quantidadeDigitos === qtdeCasas
    })

}

console.log(casasDecimais([12,1,2,3], 1))