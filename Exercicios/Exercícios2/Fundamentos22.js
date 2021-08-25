function tamanhoFrase(frase) {
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(tamanhoFrase("Vontade de me matar"))