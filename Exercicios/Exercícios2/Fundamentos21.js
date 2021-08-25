function sorteio(n) {
    const min = 0
    const max = 10

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    if (numeroAleatorio === n) {
        return `Parabéns!! O número sorteado fo o ${numeroAleatorio}`
    }else{
        return `Que pena!! O número sorteado fo o ${numeroAleatorio}`
    }
}

console.log(sorteio(3))