function jurosSimples(capitalInicial, txJuros, tempo) {
    let resultado = capitalInicial * (txJuros/100) * tempo
    let resultadoFinal = capitalInicial + resultado
    return `R$${resultadoFinal.toFixed(2)}`
}

function jurosComposto(capitalInicial, txJuros, tempo) {
    let resultado = capitalInicial * (1 + (txJuros / 100)) ** tempo
    return `R$${resultado.toFixed(2)}`
}
console.log(jurosComposto(100,10,2))
console.log(jurosSimples(100,10,2))