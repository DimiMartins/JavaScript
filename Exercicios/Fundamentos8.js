//rever
let pontuacoes = "23, 22, 10, 2, 8, 9, 15, 7, 25, 27"

function avaliar(pontuacoes) {
    let pontuacao = pontuacoes.split(", ")
    let contadorRecords = 0
    let contadorPiorJogo =1 
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            contadorPiorJogo= i + 1
        }else if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            contadorRecords ++
        }
        
    }
    return `Quantidade de quebra de recordes = ${contadorRecords}\n
    Quantidade de piores pontuações = ${contadorPiorJogo}` 
}
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

console.log(avaliar(stringPontuacoes))
console.log(avaliar(pontuacoes))