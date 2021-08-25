function dinheiro(valor) {
    let resultado = valor.toFixed(2).toString().replace(".",",")
    return `R$${resultado}`
}

console.log(dinheiro(0.30))