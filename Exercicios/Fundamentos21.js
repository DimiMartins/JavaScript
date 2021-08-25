function planoDeSaude(idade) {
    if (idade >= 0 && idade <= 10) {
        return `Seu plano de saúde ficará em R$${100 + 80}`
    }else if (idade >10 && idade <= 30) {
        return `Seu plano de saúde ficará em R$${100 + 50}`
    }else if (idade > 30 && idade <= 60) {
        return `Seu plano de saúde ficará em R$${100 + 95}`
    }else if (idade > 60 && idade <= 110) {
        return `Seu plano de saúde ficará em R$${100 + 130}`
    }else {
        return `A idade digitada ${idade} é inválida!!`
    }
}

console.log(planoDeSaude(50))