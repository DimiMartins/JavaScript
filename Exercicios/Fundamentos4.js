function divisao(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor

    return `Resultado da divisão ${Math.floor(resultado)}\n
    Resto da divisão ${resto}`
}

console.log(divisao(20,3))