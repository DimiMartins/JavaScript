function semCriatividade(vetor, n) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * n)
    }
    return resultado
}
function semCriatividade5(vetor, n) {
    let resultado = [] 
    if (n > 5) {   
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * n)
    }
    }else{
        return `O número passado [${n}] é menor que 5`
    }
    return resultado
}

console.log(semCriatividade([1,2,3,4,5,6], 3))
console.log(semCriatividade5([1,2,3,4,5,6], 8))