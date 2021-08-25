function multiplicacaoDeMentira(x , y) {
    let resultado = 0
    for (let i = 0; i < x; i++) {
        resultado += y
    }
    return resultado
}

console.log(multiplicacaoDeMentira(5,8))