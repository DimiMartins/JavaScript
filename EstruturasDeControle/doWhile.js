// a diferença entre o while e o do While é que
// no do while ele executa pelo menos 1 vez o laço

function getInteiroAleatorio(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorio(-1,10)
    console.log(opcao)
} while (opcao != 0);