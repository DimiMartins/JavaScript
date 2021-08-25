function objetoInvertido(objeto) {
    const objetoInvertido = []
    Object.entries(objeto).forEach(parChaveValor =>{
        const chave = 0
        const valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

let produto = {
    Arroz: 22.5,
    Feijao: 44.23
}

console.log(objetoInvertido(produto))