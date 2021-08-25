function repeticao(vaiRepetir, qtdeRepeticao) {
    let resultado = []
    for (let i = 0; i < qtdeRepeticao; i++) {
        resultado.push(vaiRepetir)
    }
    return resultado
}

console.log(repeticao(5,8))