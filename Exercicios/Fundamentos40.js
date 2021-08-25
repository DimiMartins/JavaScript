function conceito(vetor) {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }
    let media = total / vetor.length

    if (media >=0 && media <= 4.9) {
        return `Conceito D com média ${media.toFixed(1)}`
    }else if (media > 4.9 && media <=6.9) {
        return `Conceito C com média ${media.toFixed(1)}`
    }else if (media > 6.9 && media <= 8.9) {
        return `Conceito B com média ${media.toFixed(1)}`
    }else if (media >8.9 && media <=10) {
        return `Conceito A com média ${media.toFixed(1)}`
    }
}

console.log(conceito([2,3,8,9]))