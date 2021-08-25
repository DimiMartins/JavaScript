//rever
function estaContido(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio) )
}

console.log(estaContido("Go", ["Gol", "Goleiro", "Genocida"]))