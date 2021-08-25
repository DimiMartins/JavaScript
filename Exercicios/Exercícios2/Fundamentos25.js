function consoantes(frase) {
    const vogais = ["a", "e", "i", "o", "u"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    
    return frase
}

console.log(consoantes("cachorro"))
function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
}
console.log(removerVogais("fundamentos"))